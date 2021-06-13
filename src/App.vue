<template>
  <el-container id="app" class="default-theme">
    <el-header>Header
      <el-button>
        test
      </el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <HelloWorld />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="stylus" scoped>
#app {
  .el-header, .el-aside {
    background: #409EFF;
  }
  span {
    color: blue;
  }
  
}
</style>
