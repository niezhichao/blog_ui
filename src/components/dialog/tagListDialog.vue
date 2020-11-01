<template>
  <div class="tagListDialog">
    <el-row>
      <el-col :span="3">
        <span style="color: red">*</span><span>标签名称</span>
      </el-col>
      <el-col :span="21">
        <el-input></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "tagListDialog"
    }
</script>

<style scoped>

</style>
