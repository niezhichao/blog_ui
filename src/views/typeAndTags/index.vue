<template>
    <div class="app-wrapper">
      <page-header :headerText="headerText"></page-header>
      <el-row>
        <el-col :span="11">
          <common-comp :typeTableData="typeListData" :tableCols="classificationTableCols" dialogComponent="typeListComponent" compName="分类列表" tableHead="classificationList" class="classificationListComp"></common-comp>
        </el-col>
        <el-col :span="12">
          <common-comp :typeTableData="tagListData" :tableCols="tagListTableCols" dialogComponent="tagListComponent" compName="标签列表" tableHead="tagList" class="tagListComp"></common-comp>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import pageHeader from "../../components/pageHeader";
  import commonComp from "../../components/commonComp";
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
              prop: "tagName",
              label: "标签名称"
            }],
            typeListData:[],
            tagListData:[],
          }
      },
      methods:{

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
