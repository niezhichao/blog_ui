<template>
  <div class="blogManagementWrapper">
    <page-header :headerText="headerText"></page-header>
    <el-container>
      <el-header>
        <el-row :gutter="3">
          <el-col :span="9">
            <el-button type="primary"><i class="el-icon-plus"></i>新增</el-button>
            <el-button type="primary" plain><i class="el-icon-edit"></i>编辑</el-button>
            <el-button type="danger" plain><i class="el-icon-delete"></i>删除</el-button>
            <el-button><i class="el-icon-refresh"></i>刷新</el-button>
          </el-col>
          <el-col :span="4">
            <el-input placeholder="请输入博客名" v-model="blogQuery.title" clearable></el-input>
          </el-col>
          <el-col :span="4">
            <el-input placeholder="请输入博客分类" v-model="blogQuery.blogType" clearable></el-input>
          </el-col>
          <el-col :span="7">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <i class="el-icon-info" style="color: #409eff"></i><span class="promptText">当前表格已选择</span><span
            class="spectialText">0</span><span class="promptText">项</span><span
            class="spectialText clearTableChoose">清空</span>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-table :data="blogList" border height="350" style="width:100%" highlight-current-row>
          <el-table-column type="selection" width="50" fixed></el-table-column>
          <el-table-column type="index" width="50" label="序号" fixed></el-table-column>
          <el-table-column prop="title" show-overflow-tooltip fixed header-align="center" label="文章标题"
                           width="245"></el-table-column>
          <el-table-column prop="author" label="文章作者" width="100" header-align="center"></el-table-column>
          <el-table-column prop="createTime" show-overflow-tooltip label="创建时间" width="100" header-align="center"></el-table-column>
          <el-table-column prop="updateTime" show-overflow-tooltip label="最后编辑时间" width="150" header-align="center"></el-table-column>
          <el-table-column prop="publicTime" show-overflow-tooltip label="发布时间" width="100" header-align="center"></el-table-column>
          <el-table-column prop="blogSortedId" label="文章分类" width="100" header-align="center"></el-table-column>
          <el-table-column prop="ifPublish" label="是否发布" width="100" header-align="center"></el-table-column>
          <el-table-column label="操作" width="270" fixed="right" header-align="center">
            <template slot-scope="scope">
              <el-button size="mini" icon="el-icon-delete" type="danger">删除</el-button>
              <el-button size="mini" icon="el-icon-edit" type="warning">编辑</el-button>
              <el-button size="mini" icon="el-icon-view" type="primary" disabled>预览</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>
        <template>
          <div class="paginationBlock">
            <el-pagination
              @current-change="handleCurrentChange"
              @size-change="handleSizeChange"
              :current-page="currentPage"
              :page-sizes="pageSizes"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="pageTotal"
            ></el-pagination>
          </div>
        </template>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import pageHeader from "../../components/pageHeader";
  import {getBlogLst} from "../../api/blog"

  export default {
    name: "blogManagement",
    components: {pageHeader},
    data() {
      return {
        headerText: "文章管理|",
        blogList: [],
        blogQuery:{
          title:"",
          blogSortedId:"",
          pageSize: null,
          pageNum: null
        },
        pageSizes:[10,20,50,100],
        pageTotal:0,
        pageSize:10,
        currentPage:1
      }
    },
    methods:{
      getBlogList: function(){
        this.blogQuery.pageSize = this.pageSize;
        this.blogQuery.pageNum = this.currentPage;
        getBlogLst(this.blogQuery).then(response =>{
          if (response.data.resCode == "00") {
            this.blogList = response.data.mapData.data;
            this.pageTotal = response.data.total;
            this.pageSize = response.data.pageSize;
            this.currentPage = response.data.pageNum;
          }
        }).catch(error =>{
          this.$message({
            type: "error",
            message: error
          });
        });
      },
      handleCurrentChange: function (val) {
        this.currentPage = val;
        this.getBlogList();
      },
      handleSizeChange:function (val) {
        this.pageSize = val;
        this.getBlogList();
      }
    },
    created(){

      this.getBlogList();
    }
  }
</script>

<style scoped>
  .blogManagementWrapper {
    margin-top: 20px;
    height: 570px;
    border-bottom: 1px solid #d9ecff;
    background-color: ghostwhite;
    box-shadow: 5px 5px 3px white, 0 0 3px 0 whitesmoke;
  }

  .promptText {
    font-family: "微软雅黑";
    font-size: small;
  }

  .spectialText {
    color: #409eff;
    font-size: small;
  }

  .clearTableChoose:hover {
    cursor: pointer;
  }

  .el-row {
    margin-top: 20px;
  }
</style>
