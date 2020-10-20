<template>
  <div class="blogManagementWrapper">
    <el-row class="col-style font-bg">
      <el-col :span="24">
        <span
          style="display: inline-block; margin-top: 5px;margin-left: 50px;font-family: Arial;color: white ">文章管理|</span>
        <i class="el-icon-close" style="margin-left: 1010px;color: white" @click="closePage()"></i>
      </el-col>
    </el-row>
    <el-container>
      <el-header>

      </el-header>
      <el-main></el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "blogManagement",
    methods:{
      closePage:function () {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
  .blogManagementWrapper {
    margin-top: 20px;
    height: 570px;
    border-bottom: 1px solid #d9ecff;
    background-color: ghostwhite;
    box-shadow: 5px 5px 3px white, 0 0 3px 0 whitesmoke;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .col-style {
    border-radius: 4px;
    min-height: 36px;
  }

  .el-icon-close:hover {
    cursor: pointer;
  }

  .font-bg {
    background: #909399;
  }
</style>
