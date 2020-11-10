<template>
  <div class="app-container">

    <!-- 工具栏容器 -->
    <div id="toolbar-container"></div>

    <!-- 编辑器容器 -->
    <div id="editor">
    </div>
  </div>
</template>

<script>
  import CKEditor from '@ckeditor/ckeditor5-build-decoupled-document'
    export default {
      props:["content"],
        data(){
          return {
            editor: null
          }
        },
      mounted(){
        this.initCKEditor();
      },
      methods:{
        initCKEditor() {
          CKEditor.create(document.querySelector('#editor'), {
            ckfinder: {
              uploadUrl: 'C:\\Users\\niezhichao\\Desktop\\temp'
            }
          }).then(editor => {
            const toolbarContainer = document.querySelector('#toolbar-container');
            toolbarContainer.appendChild(editor.ui.view.toolbar.element);
            this.editor = editor //将编辑器保存起来，用来随时获取编辑器中的内容等，执行一些操作
            this.editor.setData(this.content);
          }).catch(error => {
            console.error(error);
          });

        },
        getData: function () {
           return this.editor.getData();
        },
        setData:function (val) {
          this.editor.setData(val);
        }
      }
    }
</script>

<style scoped>

  #editor{
    background-color: white;
    height: 245px;
    border: solid 1px;
  }
</style>
