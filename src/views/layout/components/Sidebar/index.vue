<template>
    <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu mode="vertical"
             background-color="#304156"
             text-color="#bfcbd9"
             active-text-color="#409EFF"
    >
      <sidebar-item :items="items"></sidebar-item>
    </el-menu>
    </el-scrollbar>
</template>

<script>
  import SidebarItem from './SidebarItem'
    export default {
      components: {SidebarItem},
      props:{
          items:{
            type: Array
          }
      }
    }
</script>

<style scoped>

</style>
