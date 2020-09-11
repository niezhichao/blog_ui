<template>
    <div class="blogCreatedWrapper">
      <el-row>
        <el-col :span="24">
          <div class="col-style font-bg">
            <span style="display: inline-block; margin-top: 5px;margin-left: 50px;font-family: Arial;color: white ">文章发布|</span>
          </div>
        </el-col>
      </el-row>
      <el-form>
        <el-row :gutter="20">
            <el-col :span="10">
              <el-input>
                <template slot="prepend">
                  <span style="color:#606266 ">文章标题</span>
                </template>
              </el-input>
            </el-col>
          <el-col :span="10">
            <el-input>
              <template slot="prepend">
                <span style="color:#606266">文章作者</span>
              </template>
            </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="10">
              <el-select  v-model="articleType" style="width: 150px"  placeholder="请选择文章分类">
                <el-option
                  v-for="item,index in options"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                >

                </el-option>
              </el-select>
              <el-input :value="artTag" :readonly="true" class="artTagsInput" style="width: 100px"></el-input>
            <el-dropdown @command="handleArtTag">
              <el-button type="primary" style="background-color: rgba(145,157,198,0.49);border-color: rgba(145,157,198,0.49);">
                <i class="el-icon-plus" style="color: #1f2d3d"></i>
                <span style="color: #1f2d3d">更多菜单</span>
              </el-button>
              <el-dropdown-menu slot="dropdown" size="medium" >
                <template v-for="(item,index) in artTags">
                  <el-dropdown-item :command="index" >{{item.label}}</el-dropdown-item>
                </template>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="10">
            <el-input>
              <template slot="prepend">
                <span style="color:#606266 ">文章来源</span>
              </template>
            </el-input>
          </el-col>
        </el-row>
        <CKEditor></CKEditor>
      </el-form>
    </div>
</template>

<script>
  import CKEditor from "../../components/CKEditor";
    export default {
        name: "blogcreated",
      components:{
        CKEditor
      },
      data(){
          return {
            options:[{
              value:"1",
              label:"选项1"
            }],
            articleType:"",
            artTag:"",
            artTags:[{
              value:"1",
              label:"Java"
            },
              {
                value:"2",
                label:"Linux"
              },
              {
                value:"3",
                label:"后台"
              }
              ]
          }
      },
      methods:{
        handleArtTag:function (command) {
          var that = this;
          var item = that.artTags[command];
          that.artTag = item.label;
        }
      }
    }
</script>

<style scoped>
 .blogCreatedWrapper{
   margin-top: 20px;
   height: 500px;
   border-bottom: 1px solid #d9ecff;
   background-color: rgba(193,226,161,0.25);
   box-shadow: 5px 5px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
 }

  .el-row{
    margin-bottom:20px;
  }

  .col-style{
    border-radius: 4px;
    min-height: 36px;
  }

  .font-bg{
    background: #909399;
  }
</style>
