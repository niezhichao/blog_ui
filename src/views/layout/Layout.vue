<template>
	<div class="app-wrapper">
		<sidebar  :items="items"></sidebar>
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
              childList:{
                name:"博客管理",
                url:"/blog/edit",
                icon:"el-icon-reading"
          }
        }]
			}
		}
	}
</script>

<style>

</style>
