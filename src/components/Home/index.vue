<template>
  <div class="home">
    <van-search
      :class="scroll?'search searchBg':'search'"
      v-model="value"
      placeholder="请输入搜索关键词"
    />
    <!-- 轮播图 -->
    <van-swipe
      :autoplay="3000"
      class="swipe"
    >
      <van-swipe-item
        v-for="(image, index) in images"
        :key="index"
      >
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 导航九宫格 -->
    <van-grid
      :column-num="5"
      :icon-size="48"
    >
      <van-grid-item
        class="iconImg"
        v-for="(e,i) in iconImg"
        :key="i"
        :icon=e
      />
    </van-grid>
    <!-- 通知栏 -->
    <van-notice-bar
      color="#1989fa"
      background="#fdfdfd"
      :left-icon="leftIcon?'volume-o':'volume'"
      speed=80
    >
      泸州老窖，回味悠长，绵甜净爽，最接近农夫山泉的好味道~
    </van-notice-bar>
    <!-- 广告链接 -->
    <div
      class="logoImg"
      v-for="(e,i) in logoImg"
      :key="i"
    >
      <a href="">
        <img
          v-lazy="e"
          alt=""
        >
      </a>
    </div>
    <!-- 爆款推荐 -->
    <div class="hot">
      <h4>爆款推荐</h4>
    </div>
    <div class="hotList">
      <ul>
        <li
          v-for="(item,index) in list"
          :key="index"
        >
          <a href="#">
            <span
              class="spanList"
              v-if="item.promo"
            >
              <i
                v-for="(e,i) in item.promo"
                :key="i"
                :style="'background:'+e.backColor"
              >{{e.name}}</i>
            </span>
            <span
              class="spanList"
              v-else
            >
              <i>满赠</i>
              <i>限时抢购</i>
              <i>满减</i>
            </span>
            <div class="shopSrc"><img
                :src='item.src'
                alt=""
              ></div>
            <span class="title">{{item.title}}</span>
            <span class="pic">
              <i>￥{{item.price}}</i>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div class="bottomTxt">
      <h6>亲~看完了哦</h6>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Search, Swipe, SwipeItem, Lazyload, Grid, GridItem, NoticeBar } from 'vant'
import { getHomeData } from '../../api/api'
// 搜索
Vue.use(Search)
// 轮播图懒加载
Vue.use(Lazyload)
// 轮播图
Vue.use(Swipe)
Vue.use(SwipeItem)
// 九宫格
Vue.use(Grid)
Vue.use(GridItem)
// 通知栏
Vue.use(NoticeBar)
export default {
  data () {
    return {
      time: '',
      leftIcon: true,
      images: [
        '/img/04d2ef31f96141f890275046be180713.jpg',
        '/img/4f7b488b417a4dd1991c5866a3254bdf.jpg',
        '/img/5e05641270b24552aad661931e3a1548.jpg',
        '/img/4338301307aa4b70b55a566879356a73.jpg',
        '/img/37ac772d5a284bb08d4988843d101c0e.jpg',
        '/img/ea5f0c9dab4d49bcbe3cbb38e61c143a.jpg',
        '/img/ed851ff23dc54a7d9da5da1c38ff4340.jpg',
        '/img/f158b7f8337d4de1b1aff59341df8d7a.jpg'
      ],
      iconImg: [
        '/img/62dd0d533ef94f3c8a8cfb9883fd9c10.jpg',
        '/img/8f58d3feba1145ae960e0644a284ea8f.jpg',
        '/img/8fe8ce3934814bfcab6fe95f148c9525.jpg',
        '/img/d1404eeec935421c8b850daa94f140f3.jpg',
        '/img/79f0383b1c18496cb3efd28206aa0ab5.jpg',
        '/img/87f5156b749a4f7c8e745b2e144918b0.jpg',
        '/img/1d7119a5956e4cc5bf07d0ca7b8b455a.jpg',
        '/img/cfc1ffacb8f8432d996ee3c1a10d59f5.jpg',
        '/img/5051c53be5404ab29aada67cc521a258.jpg',
        '/img/83557b78c1aa4f668b0ae01a902753d5.jpg'
      ],
      logoImg: [
        '/img/ea2192ad2ef94ff9aa1fd057948c501e.jpg',
        '/img/856822baae654959a83a9cecaebc13ca.jpg',
        '/img/1bf72470c6a9470684616ae0fe259368.jpg',
        '/img/89eec9c27c2847c0a5042b64e15c0653.jpg',
        '/img/5f95467c533a4328b1e731867df25118.jpg',
        '/img/47364adb1e0d435ca705e5dd93f2d50f.jpg',
        '/img/ba33f9fc760243f4a234a600cb019725.jpg',
        '/img/56ebc6af1c6a47a3a7eb3f23054126d6.jpg'
      ],
      value: '',
      scroll: false,
      list: '',
      num: 69
    }
  },
  methods: {
    menu () {
      // 根据页面滚动设置搜索框背景颜色
      /* document.documentElement.scrollTop在安卓上失效解决方案：
      const top = document.documentElement.scrollTop||document.body.scrollTop; */
      const top = document.documentElement.scrollTop || document.body.scrollTop
      // console.log(top)
      if (top >= 146) {
        this.scroll = true
      } else {
        this.scroll = false
      }
    }
  },
  async mounted () {
    // 设置用间隔时间1s，每隔一秒调用一次。
    setInterval(() => {
      this.leftIcon = !this.leftIcon
    }, 500)
    window.addEventListener('scroll', this.menu)
    // 获取数据
    const { datalist } = await getHomeData(this.num)
    this.list = datalist
    console.log(this.list)
  }
}
</script>
<style lang="less" scoped>
@import "../../style/index.less";
.home {
  .search {
    .w(375);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 8888;
    background: rgba(255, 255, 255, 0.02);
    padding: 6px 8px;
  }
  .searchBg {
    background: rgba(223, 20, 20, 0.7);
  }
  .swipe {
    .w(375);
    .h(186);
    img {
      .w(375);
      .h(186);
    }
  }
  .iconImg {
    padding: 0;
  }
  .logoImg {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      .w(375);
      .h(93);
    }
  }
  .hot {
    .w(375);
    .h(36);
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eee;
    margin-top: 12px;
    color: #888;
  }
  .hotList {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li {
        width: 49%;
        display: flex;
        justify-content: center;
        float: left;
        background: #fff;
        padding: 10px;
        box-sizing: border-box;
        overflow: hidden;
        margin-bottom: 3px;
        .spanList {
          color: #fff;
          i {
            display: block;
            height: 16px;
            padding: 2px 6px;
            font-size: 12px;
            float: left;
            border-radius: 20px;
            margin: 6px 0 0 3px;
          }
          i:nth-of-type(1) {
            background: rgb(76, 123, 211);
          }
          i:nth-of-type(2) {
            background: #ffa855;
          }
        }
        .shopSrc {
          img {
            .w(166);
            .h(166);
          }
        }
        .title {
          display: block;
          height: 30px;
          font-size: 12px;
          overflow: hidden;
          color: #333;
        }
        .pic {
          i:nth-of-type(1) {
            font-size: 16px;
            color: #f00;
            padding-right: 2px;
          }
          i:nth-of-type(2) {
            font-size: 12px;
            color: #ccc;
            text-decoration: line-through;
          }
        }
      }
    }
  }
  .bottomTxt {
    height: 80px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    font-size: 16px;
    color: #ccc;
  }
}
</style>
