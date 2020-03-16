<template>
  <div id="app">
    <!-- 导航组件 -->
    <Tab></Tab>
    <!-- 路由渲染 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Tab from './components/Tab'
export default {
  components: { Tab }
}
</script>

<style lang="less">
#app{
  background: #f6f6f6;
}
</style>
