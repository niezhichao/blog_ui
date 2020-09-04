<template>
    <div class="dashboard-editor-container">
      <el-menu class = "navbar" mode = "horizontal">
        <!--首页 图标-->
        <template>
          <i class="el-icon-s-home" style="color: #304156;" ></i>
          <span style="font-family: Hiragino Sans GB ">首页</span>
        </template>

        <div class="right-menu">
          <!--<el-tooltip effect="dark" content="换肤" placement="bottom">
            <theme-picker class="theme-switch right-menu-item"></theme-picker>
          </el-tooltip>-->

          <i class="el-icon-user-solid"></i>
          <el-dropdown class="avatar-container" trigger="click">
            <span class="el-dropdown-link">
             121414
              <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown" class="user-dropdown">
              <el-dropdown-item>
                <span style="display:block;" >关于我</span>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <span style="display:block;" >更新日志</span>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <span style="display:block;" >退出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

      </el-menu>
    </div>
</template>

<script>
  import ThemePicker from "@/components/ThemePicker";
    export default {
      components:{
        ThemePicker
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    .hamburger-container {
      line-height: 58px;
      height: 50px;
      float: left;
      padding: 0 10px;
    }
    .breadcrumb-container {
      float: left;
    }
    .errLog-container {
      display: inline-block;
      vertical-align: top;
    }

    i:hover{
      cursor: pointer;
    }
    .right-menu {
      float: right;
      height: 100%;
      &:focus {
        outline: none;
      }
      .right-menu-item {
        display: inline-block;
        margin: 0 8px;
      }
      .screenfull {
        height: 20px;
      }
      .international {
        vertical-align: top;
      }
      .theme-switch {
        vertical-align: 15px;
      }
      .avatar-container {
        height: 50px;
        margin-right: 30px;
        .avatar-wrapper {
          cursor: pointer;
          margin-top: 5px;
          position: relative;
          .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }
          .el-icon-caret-bottom {
            position: absolute;
            right: -20px;
            top: 25px;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>
