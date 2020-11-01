<template>
  <div class="typeListDialog">
    <el-row>
      <el-col :span="3">
        <span style="color: red">*</span><span>分类名称</span>
      </el-col>
      <el-col :span="21">
        <el-input></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3">
        <span style="color: red">*</span><span>分类简介</span>
      </el-col>
      <el-col :span="21">
        <el-input></el-input>
      </el-col>
    </el-row>
  </div>
 </template>

<script>
    export default {
        name: "typeListDialog"
    }
</script>

<style scoped>

</style>
