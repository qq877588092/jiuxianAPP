<template>
  <div class="tab">
    <router-link
      class='box'
      to='/home'
      tag='div'
      @click.native="setName1"
    >
      <van-icon
        class="icon"
        :name="icons1?'wap-home-o':'wap-home'"
      />
      <span>首页</span> </router-link>
    <router-link
      class='box'
      to='/sort'
      tag='div'
      @click.native="setName2"
    >
      <van-icon
        class="icon"
        :name="icons2?'apps-o':'wap-nav'"
      />
      <span>分类</span> </router-link>
    <router-link
      class='box'
      to='/recommend'
      tag='div'
      @click.native="setName3"
    >
      <van-icon
        class="icon"
        :name="icons3?'hot-o':'hot'"
      />
      <span>推荐</span> </router-link>
    <router-link
      class='box'
      to='/cart'
      tag='div'
      @click.native="setName4"
    >
      <van-icon
        class="icon"
        :name="icons4?'cart-o':'cart'"
        info='12'
      />
      <span>购物车</span>
    </router-link>
    <router-link
      class='box'
      to='/my'
      tag='div'
      @click.native="setName5"
    >
      <van-icon
        class="icon"
        :name="icons5?'manager-o':'manager'"
      />
      <span>我的</span>
    </router-link>
  </div>
</template>
<script>
import Vue from 'vue'
import { Icon } from 'vant'
Vue.use(Icon)
export default {
  data () {
    return {
      icons1: true,
      icons2: true,
      icons3: true,
      icons4: true,
      icons5: true
    }
  },
  methods: {
    setName1 () {
      this.icons1 = !this.icons1
      this.icons2 = true
      this.icons3 = true
      this.icons4 = true
      this.icons5 = true
    },
    setName2 () {
      this.icons2 = !this.icons2
      this.icons1 = true
      this.icons3 = true
      this.icons4 = true
      this.icons5 = true
    },
    setName3 () {
      this.icons3 = !this.icons3
      this.icons2 = true
      this.icons1 = true
      this.icons4 = true
      this.icons5 = true
    },
    setName4 () {
      this.icons4 = !this.icons4
      this.icons2 = true
      this.icons3 = true
      this.icons1 = true
      this.icons5 = true
    },
    setName5 () {
      this.icons5 = !this.icons5
      this.icons2 = true
      this.icons3 = true
      this.icons4 = true
      this.icons1 = true
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../style/index.less";
.tab {
  z-index: 1888;
  .w(375);
  .h(42);
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  border-top: 1px solid #eee;
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      font-size: 20px;
    }
    span {
      font-size: 12px;
    }
  }
}
</style>
