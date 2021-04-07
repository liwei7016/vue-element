<template>
  <div>

    <el-upload
      class="upload-demo"
      action="/api/file/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :on-exceed="handleExceed">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>  
</template>

<script>
  import {ajaxDelete, ajaxPost} from "@/utils/request"
  export default {
    name: "DataDemo",
    data() {
      return {
        
      };
    },
    mounted() {
      ajaxPost("/api/apiTest", {time: new Date()})
    },
    methods: {
      handleRemove(file, fileList) {
        ajaxDelete("/api/file/delete/" + file.name)
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>

<style scoped>

</style>