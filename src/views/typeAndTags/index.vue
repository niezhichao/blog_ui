<template>
    <div class="app-wrapper">
      <page-header :headerText="headerText"></page-header>
    </div>
</template>

<script>
  import pageHeader from "../../components/pageHeader";
    export default {
        name: "typeAndTasMng",
      components: {pageHeader},
      data(){
          return {
            headerText: "分类/标签|"
          }
      },
      methods:{

      }
    }
</script>

<style scoped>
  .app-wrapper{
    margin-top: 20px;
    height: 570px;
    border-bottom: 1px solid #d9ecff;
    background-color: ghostwhite;
    box-shadow: 5px 5px 3px white, 0 0 3px 0 whitesmoke;
  }
</style>
