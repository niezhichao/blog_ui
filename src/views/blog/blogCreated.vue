<template>
    <div class="blogCreatedWrapper">
      <el-row class="col-style font-bg">
        <el-col :span="24">
            <span style="display: inline-block; margin-top: 5px;margin-left: 50px;font-family: Arial;color: white ">文章发布|</span>
            <i class="el-icon-close" style="margin-left: 1010px;color: white" @click="closeBlogAddPage()"></i>
        </el-col>
      </el-row>
      <el-form>
        <el-row :gutter="20">
            <el-col :span="10">
              <el-input v-model="blogInfo.title">
                <template slot="prepend">
                  <span style="color:#606266 ">文章标题</span>
                </template>
              </el-input>
            </el-col>
          <el-col :span="10">
            <el-input v-model="blogInfo.author">
              <template slot="prepend">
                <span style="color:#606266">文章作者</span>
              </template>
            </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="10">
              <el-select  v-model="blogInfo.blogSortedId" style="width: 150px"  placeholder="请选择文章分类">
                <el-option
                  v-for="item,index in blogTypes"
                  :key="index"
                  :label="item.typeName"
                  :value="item.pid"
                >

                </el-option>
              </el-select>
              <el-input :value="artTag" :readonly="true" class="artTagsInput" style="width: 100px"></el-input>
            <el-dropdown @command="handleArtTag">
              <el-button type="primary" style="background-color: rgba(145,157,198,0.49);border-color: rgba(145,157,198,0.49);">
                <i class="el-icon-plus" style="color: #1f2d3d"></i>
                <span style="color: #1f2d3d">文章标签</span>
              </el-button>
              <el-dropdown-menu slot="dropdown" size="medium" >
                <template v-for="(item,index) in artTags">
                  <el-dropdown-item :command="index" >{{item.tagContent}}</el-dropdown-item>
                </template>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="10">
            <el-input v-model="blogInfo.articlesQuoted">
              <template slot="prepend">
                <span style="color:#606266 ">文章来源</span>
              </template>
            </el-input>
          </el-col>
        </el-row>
        <el-row>
          <CKEditor ref="ckeditor"></CKEditor>
        </el-row>
        <el-row>
          <el-col :span="6" :offset="18">
            <el-button @click="draftArticle">草稿</el-button>&nbsp;&nbsp;&nbsp;&nbsp;
            <el-button type="success" @click="publishArticle">发布</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
</template>

<script>
  import CKEditor from "../../components/CKEditor";
  import {addBlog} from "../../api/blog";
  import {getBlogTypeList} from "../../api/blogType";
  import {getTagList} from "../../api/tag";

  export default {
        name: "blogcreated",
      components:{
        CKEditor
      },
      data(){
          return {
            blogInfo:{
              title: null,
              author: null,
              blogSortedId: null,
              tagId: null,
              articlesQuoted: null,
              content: null,
              ifPublish: null
            },
            blogTypes:[],
            artTag:"",
            artTags:[]
          }
      },
      methods:{
        handleArtTag:function (command) {
          var that = this;
          var item = that.artTags[command];
          that.blogInfo.tagId = item.pid;
          that.artTag = item.tagContent;
        },
        closeBlogAddPage:function () {
         this.$router.go(-1);
        },
        publishArticle: function () {
          this.blogInfo.content = this.$refs.ckeditor.getData();
          this.blogInfo.ifPublish = this.$IfPublic.YES;
         addBlog(this.blogInfo).then(response => {
            if (response.data.resCode == "00"){
              this.$message({
                type: "success",
                message: response.data.resMsg
              })
            }
          })
        },
        draftArticle:function () {
          this.blogInfo.content = this.$refs.ckeditor.getData();
          this.blogInfo.ifPublish = this.$IfPublic.NO;
          addBlog(this.blogInfo).then(response => {
            if (response.data.resCode == "00"){
              this.$message({
                type: "success",
                message: response.data.resMsg
              })
            }
          })
        }
      },
      mounted() {

          /*获取博客类型列表*/
        getBlogTypeList().then(response =>{
          if (response.data.resCode == "00") {
            this.blogTypes = response.data.mapData.data;
          }
        }).catch(error =>{
          this.$message({
            type: "error",
            message: error
          });
        });

        /*获取标签列表*/
        getTagList().then(response =>{
          if (response.data.resCode == "00") {
            this.artTags = response.data.mapData.data;
          }
        }).catch(error =>{
          this.$message({
            type: "error",
            message: error
          });
        });
      }
    }
</script>

<style scoped>
 .blogCreatedWrapper{
   margin-top: 20px;
   height: 570px;
   border-bottom: 1px solid #d9ecff;
   background-color: rgba(193,226,161,0.25);
   box-shadow: 5px 5px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
 }

  .el-row{
    margin-bottom:20px;
  }

  .col-style{
    border-radius: 4px;
    min-height: 36px;
  }

 .el-icon-close:hover{
   cursor: pointer;
 }

  .font-bg{
    background: #909399;
  }
</style>
