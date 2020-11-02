<template>
  <div class="typeListDialog">
    <el-row>
      <el-col :span="3">
        <div class="prefix_input">
        <span style="color: red">*</span><span>分类名称</span>
        </div>
      </el-col>
      <el-col :span="21">
        <el-input v-model="blogTypeVoEdit.typeName"></el-input>
      </el-col>
    </el-row>
    <el-row class="typeContent">
      <el-col :span="3">
        <div class="prefix_input">
        <span style="color: red">*</span><span>分类简介</span>
        </div>
      </el-col>
      <el-col :span="21">
        <el-input v-model="blogTypeVoEdit.content"></el-input>
      </el-col>
    </el-row>

    <el-row class="btnPanel">
      <el-col :span="24">
        <el-button @click="cancelDialog">取 消</el-button>
        <el-button type="primary" @click="submitTypeVo">确 定</el-button>
      </el-col>
    </el-row>
  </div>
 </template>

<script>
    export default {
        name: "typeListDialog",
        props:["blogTypeVoEdit"],
        data(){
          return {
            blogTypeVo:{
              typeName:"",
              content:""
            }
          }
        },
      methods:{
        cancelDialog:function () {
           this.$emit("cancel-dialog");
        },
        submitTypeVo(){
          console.log(this.blogTypeVoEdit);
        }
      }
    }
</script>

<style scoped>
  .typeContent{
    margin-top: 30px;
  }
  .prefix_input{
    margin-top: 10px;
  }
  .btnPanel{
    text-align: center;
    margin-top: 20px;
  }
</style>
