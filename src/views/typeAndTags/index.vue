<template>
    <div class="app-wrapper">
      <page-header :headerText="headerText"></page-header>
      <el-row>
        <el-col :span="11">
          <common-comp
            @pageNum-change="typePageNumChange"
            @pageSize-change="typePageSizeChange"
            :typeTableData="typeListData"
            :tableCols="classificationTableCols"
            dialogComponent="typeListComponent"
            compName="分类列表"
            tableHead="blueHead"
            class="classificationListComp">
          </common-comp>
        </el-col>
        <el-col :span="12">
          <common-comp
            @pageNum-change="tagPageNumChange"
            @pageSize-change="tagPageSizeChange"
            :typeTableData="tagListData"
            :tableCols="tagListTableCols"
            dialogComponent="tagListComponent"
            compName="标签列表"
            tableHead="redHead"
            class="tagListComp">
          </common-comp>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import pageHeader from "../../components/pageHeader";
  import commonComp from "../../components/commonComp";
  import {getAllBlogTypeWithPage} from "../../api/blogType";
  import {getAllTagsWithPage} from "../../api/tag";
    export default {
        name: "typeAndTasMng",
      components: {pageHeader,commonComp},
      data(){
          return {
            headerText: "分类/标签|",
            classificationTableCols:[{//分类列表 表头信息
              prop: "typeName",
              label: "分类名称"
            },{
              prop: "content",
              label: "分类简介"
            }],
            tagListTableCols:[{
              prop: "tagContent",
              label: "标签名称"
            }],
            typeListData:[],
            tagListData:[],
            tagCurrentPage:1,
            tagPageSize:5,
            typeCurrentPage:1,
            typePageSize:5

          }
      },
      methods:{
        typePageSizeChange(pageSize){
          this.typePageSize=pageSize;
          this.getAllBlogType();
        },
        tagPageSizeChange(pageSize){
          this.tagPageSize = pageSize;
          this.getAllTags();
        },
        tagPageNumChange(pageNum){
          this.tagCurrentPage=pageNum;
          this.getAllTags();
        },
        typePageNumChange(pageNum){
          this.typeCurrentPage = pageNum;
          this.getAllBlogType();
        },
        getAllBlogType(){
            var param = {
              currentPage:this.typeCurrentPage,
              pageSize:this.typePageSize
            }
          getAllBlogTypeWithPage(param).then(response=>{
              if (response.data.resCode="00"){
                var page = response.data.page;
                this.typeListData = page;
              }
          }).catch(error=>{
            this.$message({
              type:"error",
              message:error
            });
          })
        },
        getAllTags(){
          var param = {
            currentPage:this.tagCurrentPage,
            pageSize:this.tagPageSize
          };
          getAllTagsWithPage(param).then(response=>{
            if (response.data.resCode="00"){
              var page = response.data.page;
              this.tagListData = page;

            }
          }).catch(error=>{
            this.$message({
              type:"error",
              message:error
            });
          });
        }
      },
      mounted(){
          this.getAllBlogType();
          this.getAllTags();
      }
    }
</script>

<style scoped>
  .app-wrapper{
    margin-top: 20px;
    height: 570px;
    border-bottom: 1px solid #d9ecff;
    background-color: ghostwhite;
    box-shadow: 5px 5px 3px white, 0 0 3px 0 whitesmoke;
  }
  /*左边 分类列表组件*/
  .classificationListComp{
    margin-left: 10px;
  }
  /*右边边 标签列表组件*/
  .tagListComp{
    margin-left: 50px;
  }
</style>
