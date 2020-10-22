<template>
  <el-row class="col-style font-bg">
    <el-col :span="24">
      <span
        style="display: inline-block; margin-top: 9px;margin-left: 50px;font-family: DFKai-SB;color: rgba(55,71,63,0.76) ">{{headerText}}</span>
      <i class="el-icon-close" style="margin-left: 1010px;color: rgba(55,71,63,0.76)" @click="closePage()"></i>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "pageHeader",
    props:["headerText"],
    data(){
          return{
            header:""
          }

    },
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
    background: rgba(51,189,126,0.31);
  }

  .el-icon-close:hover{
    cursor: pointer;
  }
</style>
