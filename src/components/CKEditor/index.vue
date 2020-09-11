<template>
  <div class="app-container">
    <textarea id="editor" rows="10" cols="80"></textarea>
  </div>
</template>

<script>
  import CKEditor from '@ckeditor/ckeditor5-build-decoupled-document'
    export default {
        data(){
          return {
            editor: null
          }
        },
      mounted(){

      },
      methods:{
        initCKEditor() {
          CKEditor.create(document.querySelector('#editor'), {
            ckfinder: {

            }
          }).then(editor => {
            const toolbarContainer = document.querySelector('#toolbar-container');
            toolbarContainer.appendChild(editor.ui.view.toolbar.element);
            this.editor = editor //将编辑器保存起来，用来随时获取编辑器中的内容等，执行一些操作
          }).catch(error => {
            console.error(error);
          });

        }}
    }
</script>

<style scoped>

</style>
