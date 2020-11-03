<template>
  <div class="commonCmp">
    <el-row :class="tableHead">
      <el-col :span="20">
        <span class="overTableInfo">{{compName}}</span>
      </el-col>
      <el-col :span="4">
        <el-button class="overTableBtn" @click="dialogVisibleChange(dialogComponent)" type="info" size="mini" round>添加
        </el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table :data="typeTableData" border height="350" style="width:100%" highlight-current-row>
          <el-table-column type="selection"></el-table-column>
          <el-table-column type="index" width="50" label="序号"></el-table-column>
          <el-table-column v-for="(item,index) in tableCols"
                           :key="item.prop+''+index"
                           show-overflow-tooltip
                           :prop="item.prop"
                           :label="item.label"
                           min-width="25%"
                           header-align="center"
          ></el-table-column>
          <el-table-column label="操作" min-width="40%" header-align="center">
            <template slot-scope="scope">
              <el-button size="mini" icon="el-icon-delete" type="danger">删除</el-button>
              <el-button size="mini" icon="el-icon-edit" type="warning" @click="editRow(scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row class="paginationBlock">
      <el-col :span="24">
        <el-pagination
          small
          :current-page="1"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </el-col>
    </el-row>

    <el-dialog
      center
      title="分类添加"
      :visible.sync="typeListDialogVisible"
    >
      <type-list-dialog @cancel-dialog="cancelTypeListDialog" :blogTypeVoEdit="blogTypeVoEditData"></type-list-diaLog>
    </el-dialog>

    <el-dialog center title="标签添加" :visible.sync="tagListDialogVisible">
      <tag-list-dialog @cancel-dialog="cancelTagListDialog" :tagVoEdit="tagVoEditData"></tag-list-dialog>
    </el-dialog>
  </div>
</template>

<script>
  import {typeListDialog, tagListDialog} from "../../components/dialog";

  export default {
    name: "commonComp",
    components: {typeListDialog, tagListDialog},
    /**
     * tableHead:不同用途 用不同的class。比如分类列表用classificationList
     * compName 列表名称
     * */
    props: ["tableHead", "compName", "tableCols", "dialogComponent","typeTableData"],
    data() {
      return {
        typeListDialogVisible: false,
        tagListDialogVisible: false,
        blogTypeVoEditData:{},
        tagVoEditData:{}
      }
    },
    methods: {
      dialogVisibleChange: function (val) {//切换不同列表添加按钮的弹窗
        //点添加按钮  清空编辑弹出窗的值
        this.blogTypeVoEditData={};
        this.tagVoEditData={};

        //切换显示不同dialog
        this.typeListDialogVisible = val == "typeListComponent";
        this.tagListDialogVisible = val == "tagListComponent";
      },
      cancelTypeListDialog() {
        this.typeListDialogVisible=false;
      },
      cancelTagListDialog(){
        this.tagListDialogVisible =false;
      },
      editRow(val){
        //分类列表的编辑dialog赋值  传递给子组件
        var typeListFlag = this.dialogComponent == "typeListComponent";//父组件 是分类列表
        if (typeListFlag){
          this.blogTypeVoEditData = val;
          this.typeListDialogVisible = typeListFlag;
          return
        }

        //标签列表的编辑dialog赋值 传递给子组件
        var tagListFlag = this.dialogComponent == "tagListComponent";//父组件 是标签列表
        if (tagListFlag){
          this.tagVoEditData = val;
          this.tagListDialogVisible = tagListFlag;
          return
        }
      }
    }
  }
</script>

<style scoped>
  .classificationList {
    margin-top: 20px;
    min-height: 36px;
    background-color: #409EFF;
  }

  .tagList {
    margin-top: 20px;
    min-height: 36px;
    background-color: #F56C6C;
  }

  .overTableInfo {
    color: white;
    font-family: DFKai-SB;
    margin-top: 9px;
    margin-left: 10px;
    display: inline-block;
  }

  .overTableBtn {
    margin-top: 4px;
  }

  .paginationBlock {
    margin-top: 20px;
  }
</style>

