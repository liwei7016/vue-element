<template>
  <el-container>
    <el-header class="sec-header">
      <div class="main-content">
        main-content
      </div>
    </el-header>
    <el-main class="sec-body">
      <div class="main-content">
        <router-view/>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
  .sec-header {
    height: 60px;
    padding: 0;
    background: #0068b6;
    .main-content {
      position: relative;
      width: 1105px;
      margin-left: auto;
      margin-right: auto; 
    }
  }

  .sec-body {
    padding: 0;
    .main-content {
      position: relative;
      width: 1105px;
      height: calc(100vh - 60px);
      margin-left: auto;
      margin-right: auto;
      background: #ccc;
    }
  }

  
</style>