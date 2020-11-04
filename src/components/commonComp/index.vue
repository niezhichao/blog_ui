<template>
  <div class="commonCmp">
    <el-row :class="tableHead">
      <el-col :span="20">
        <span class="overTableInfo">{{compName}}</span>
      </el-col>
      <el-col :span="4">
        <el-button class="overTableBtn" @click="dialogVisibleChange" type="info" size="mini" round>添加
        </el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table
          :data="typeTableData.data"
          border
          height="350" style="width:100%"
          highlight-current-row
        >
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
          :current-page="typeTableData.currentPage"
          :page-sizes="pageSizes"
          :page-size="typeTableData.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="typeTableData.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </el-col>
    </el-row>

    <el-dialog
      center
      :visible.sync="dialogVisible"
      :title="compName"
    >

      `
      <el-form :model="editData" ref="editData">
        <el-row v-for="(item,index) in tableCols" :key="index">
          <el-col :span="3">
            <div class="prefix_input"><span style="color: red">*</span><span>{{item.label}}</span></div>
          </el-col>
          <el-col :span="21">
            <el-form-item prop="tagContent">
              <el-input v-model="editData[item.prop]"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-row class="btnPanel">
        <el-col :span="24">
          <el-button @click="cancelDialog">取 消</el-button>
          <el-button type="primary" @click="submitData">确 定</el-button>
        </el-col>
      </el-row>
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
    props: ["tableHead",
      "compName",
      "tableCols",
      "dialogComponent",
      "typeTableData"
    ],
    data() {
      return {
        dialogVisible: false,
        editData: {},
        pageSizes: [5, 10, 20, 50, 100],
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    },
    methods: {
      dialogVisibleChange: function () {
        this.editData = {};
        this.dialogVisible = true;
      },
      editRow(val) {
        var temp = {};
        for (var item of this.tableCols) {
          temp[item.prop] = val[item.prop];
        }
        this.editData = temp;
        this.dialogVisible = true;
      },
      handleSizeChange(val) {
        this.$emit("pageSize-change", val)
      },
      handleCurrentChange(val) {
        this.$emit("pageNum-change", val);
      },
      submitData() {

      },
      cancelDialog() {
        this.editData = {};
        this.dialogVisible = false;
      }
    }
  }
</script>

<style scoped>
  .blueHead {
    margin-top: 20px;
    min-height: 36px;
    background-color: #409EFF;
  }

  .redHead {
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

  .btnPanel {
    text-align: center;
    margin-top: 20px;
  }
</style>

