<template>
	<div class="app-wrapper">
		<sidebar class="sidebar-container" :items="items"></sidebar>
	</div>
</template>

<script>
	import {Sidebar} from "./components";
	
	export default {
		name:"Layout",
		components:{
			Sidebar
		},
		data(){
			return {
				items:[]
			}
		}
	}
</script>

<style>
	
</style>