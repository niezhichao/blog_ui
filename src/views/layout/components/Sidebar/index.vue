<template>
    <el-menu>
      <sidebar-item :items="items"></sidebar-item>
    </el-menu>
</template>

<script>
  import SidebarItem from './SidebarItem'
    export default {
      components: {SidebarItem},
      comments: {SidebarItem},
      props:{
          items:{
            type: Array
          }
      }
    }
</script>

<style scoped>

</style>
