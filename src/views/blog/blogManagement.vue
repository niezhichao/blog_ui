<template>
  <div class="blogManagementWrapper">
    <page-header :headerText="headerText"></page-header>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="12">
            <el-button type="primary"><i class="el-icon-plus"></i>新增</el-button>
            <el-button type="primary" plain><i class="el-icon-edit"></i>编辑</el-button>
            <el-button type="danger" plain><i class="el-icon-delete"></i>删除</el-button>
            <el-button><i class="el-icon-refresh"></i>刷新</el-button>
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
        <el-table :data="blogInfos" border height="350" style="width:100%" highlight-current-row>
          <el-table-column type="selection" width="50" fixed></el-table-column>
          <el-table-column type="index" width="50" label="序号" fixed></el-table-column>
          <el-table-column prop="title" show-overflow-tooltip fixed header-align="center" label="文章标题"
                           width="245"></el-table-column>
          <el-table-column prop="author" label="文章作者" width="100" header-align="center"></el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="100" header-align="center"></el-table-column>
          <el-table-column prop="updateTime" label="最后编辑时间" width="150" header-align="center"></el-table-column>
          <el-table-column prop="publicTime" label="发布时间" width="100" header-align="center"></el-table-column>
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
              :current-page="1"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
            ></el-pagination>
          </div>
        </template>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import pageHeader from "../../components/pageHeader";

  export default {
    name: "blogManagement",
    components: {pageHeader},
    data() {
      return {
        headerText: "文章管理|",
        blogInfos: [{
          title: "Vue+ElementUI+SpringCloud开发博客",
          author: "刘乐宝"
        }]
      }
    },
    methods: {}
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
