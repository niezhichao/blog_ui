<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item>

        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "Breadcrumb",
      data(){
          return {
            levelList: null
          }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
