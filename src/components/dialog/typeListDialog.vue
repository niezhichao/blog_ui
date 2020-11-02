<template>
  <div class="typeListDialog">
    <el-form :model="blogTypeVoEdit" :rules="rules" ref="blogTypeVoEdit">
    <el-row>
      <el-col :span="3">
        <div class="prefix_input">
        <span style="color: red">*</span><span>分类名称</span>
        </div>
      </el-col>
      <el-col :span="21">
        <el-form-item prop="typeName">
        <el-input v-model="blogTypeVoEdit.typeName"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row class="typeContent">
      <el-col :span="3">
        <div class="prefix_input">
        <span style="color: red">*</span><span>分类简介</span>
        </div>
      </el-col>
      <el-col :span="21">
        <el-form-item prop="content">
        <el-input v-model="blogTypeVoEdit.content"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row class="btnPanel">
      <el-col :span="24">
        <el-button @click="cancelDialog">取 消</el-button>
        <el-button type="primary" @click="submitTypeVo('blogTypeVoEdit')">确 定</el-button>
      </el-col>
    </el-row>
    </el-form>
  </div>
 </template>

<script>
  import {addBlogType} from '../../api/blogType'
    export default {
        name: "typeListDialog",
        props:["blogTypeVoEdit"],
        data(){
          return {
            blogTypeVo:{},
            rules:{
              typeName:{
                required: true, message: '请输入分类名称', trigger: 'blur'
              },
              content:{
                required: true, message: '请输入分类简介', trigger: 'blur'
              }
            }
          }
        },
      methods:{
        cancelDialog:function () {
           this.$emit("cancel-dialog");
        },
        submitTypeVo(val){
          this.$refs[val].validate(valid =>{
            if (valid){
              var param =this.blogTypeVoEdit;
              addBlogType(param).then(response=>{
                if (response.data.resCode=="00"){
                  this.$message({
                    type: "success",
                    message: response.data.resMsg
                  })
                }
              }).catch(error=>{
                this.$message({
                  type: "error",
                  message: error
                });
              });
            }else {
              this.$message({
                message: '必输项不能为空',
                type: 'warning'
              });
              return false;
            }
          })
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
