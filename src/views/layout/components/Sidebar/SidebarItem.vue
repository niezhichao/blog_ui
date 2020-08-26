<template>
	<div class="menu-wrapper">
    <template v-for="(item,index) in items" v-if="items.length>0">
      <el-submenu :key="index" :index="index+''">
          <template slot="title">
              <i v-if="item.icon" :class="item.icon"></i>
              <span v-if="item.name" >{{item.name}}</span>
          </template>

        <template v-for="(child,index2) in item.childList">
          <el-menu-item :index="child.url" :key="child.name">
            <i v-if="child.icon" :class="child.icon"></i>
            <span v-if="child.name" slot="title">{{child.name}}</span>
          </el-menu-item>
        </template>
      </el-submenu>
    </template>
	</div>
</template>

<script>

  export  default {
    name: 'SidebarItem',
    props:{
      items:{
        type:Array
      }
    }
  }

</script>

<style>
</style>
