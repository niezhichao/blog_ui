<template>
	<div class="app-wrapper">
		<sidebar class="sidebar-container" :items="items"></sidebar>
    <div class="main-container">

    </div>
	</div>
</template>

<script>
	import {Sidebar} from "./components";

	export default {
		name: "Layout",
		components:{
      Sidebar
		},
		data(){
			return {
				items:[{
              name:"博客管理",
              icon:"el-icon-edit",
              childList:[{
                name:"博客管理2",
                url:"/blog/edit",
                icon:"el-icon-reading"
          }]
        }]
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>
