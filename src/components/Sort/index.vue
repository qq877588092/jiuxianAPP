<template>
  <div class="sortBox">
    <!-- 左侧分类栏 -->
    <div
      ref='leftBox'
      class="leftBox"
    >
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          class="leftTab"
          v-for="(e,i) in titleList"
          :key="i"
          :title='e'
          @click='change(i)'
        />
      </van-sidebar>
    </div>
    <!-- 右侧列表 -->
    <div
      class="tabList"
      ref='wrapper'
    >
      <div
        :class="displays==i&&i==0?'content':'content displays'"
        v-for="(e,i) in 14"
        :key="i"
      >
        <h4>{{i}}</h4>
      </div>
    </div>
  </div>
</template>
<script>
import BS from 'better-scroll'
import Vue from 'vue'
import { Lazyload, Sidebar, SidebarItem } from 'vant'
// 图片懒加载
Vue.use(Lazyload)
// 侧边栏
Vue.use(Sidebar)
Vue.use(SidebarItem)
export default {
  data () {
    return {
      activeKey: 0,
      titleList: ['热门选购', '白酒', '葡萄酒', '洋酒', '整箱购', '老酒', '海外直购', '精美大坛', '值得买', '礼尚往来', '红酒整箱', '清仓爆卖', '红酒整箱', '销量排行', '红酒整箱'],
      dispalys: 0
    }
  },
  methods: {
    change (index) {
      this.displays = index
    },
    initBs () {
      // 第一个参数类名，第二个参数配置项
      /* eslint-disable no-new */
      const wrapper = this.$refs.wrapper
      console.log(wrapper)
      new BS(wrapper, { probeType: 3, click: true })
    },
    initBs2 () {
      // 第一个参数类名，第二个参数配置项
      /* eslint-disable no-new */
      const leftBox = this.$refs.leftBox
      console.log(leftBox)
      new BS(leftBox, { probeType: 3, click: true })
    }
  },
  mounted () {
    this.initBs()
    this.initBs2()
  }
}
</script>
<style lang="less" scoped>
@import "../../style/index.less";
.sortBox {
  z-index: 6666;
  .leftBox {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    .leftTab {
      .h(50);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .tabList {
    position: absolute;
    top: 0;
    right: 0;
    left: 85px;
    bottom: 0;
    background: #fff;
    overflow: hidden;
    .displays {
      display: none;
    }
  }
}
</style>
