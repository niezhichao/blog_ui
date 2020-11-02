<template>
  <div class="tagListDialog">
    <el-row>
      <el-col :span="3">
        <div class="prefix_input"><span style="color: red">*</span><span>标签名称</span></div>
      </el-col>
      <el-col :span="21">
        <el-input v-model="tagVoEdit.tagName"></el-input>
      </el-col>
    </el-row>

    <el-row class="btnPanel">
      <el-col :span="24">
        <el-button @click="cancelDialog">取 消</el-button>
        <el-button type="primary" @click="typeListDialogVisible = false">确 定</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "tagListDialog",
        props:["tagVoEdit"],
       data(){
          return {
              tagVo:{}
          }
       },
      methods:{
        cancelDialog:function () {
          this.$emit("cancel-dialog");
        }
      }
    }
</script>

<style scoped>
  .prefix_input{
    margin-top: 10px;
  }
  .btnPanel{
    text-align: center;
    margin-top: 20px;
  }
</style>
