<template>
  <el-row class="col-style font-bg">
    <el-col :span="24">
      <span
        style="display: inline-block; margin-top: 5px;margin-left: 50px;font-family: Arial;color: white ">文章发布|</span>
      <i class="el-icon-close" style="margin-left: 1010px;color: white" @click="closePage()"></i>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "pageHeader",
    methods: {
      closePage: function () {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>

  .col-style {
    border-radius: 4px;
    min-height: 36px;
  }

  .font-bg {
    background: #909399;
  }
</style>
