<template>
  <div class="cart">
    <div class="header">
      <span @click="showPopup">
        <van-icon
          class="iconAdds"
          name="location-o"
        />{{spanTxt}}</span>
      <span>编辑商品</span>
    </div>
    <!-- 地址弹出层 -->
    <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: '50%' }"
    >
      <van-area
        :area-list="areaList"
        value="440904"
        @confirm='confirm'
        @cancel='cancel'
      />
    </van-popup>
    <!-- 优惠券单元格 -->
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />
    <!-- 优惠券列表 -->
    <van-popup
      v-model="showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px;"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
    <!-- 商品卡片 -->
    <div>
      <ul>
        <li v-for="(ele,i) in list" :key="i">
          <van-card
            class="cardBox"
            num="2"
            :price="ele.price"
            :origin-price="ele.price"
            :desc="ele.shopProId"
            :title="ele.title"
            :thumb="ele.src"
            :lazy-load=true
          >
            <div slot="tags">
            </div>
            <div slot="footer">
            </div>
          </van-card>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import areaList from './address'
import Vue from 'vue'
import { Area, Icon, Popup, CouponCell, CouponList, Card, Lazyload } from 'vant'
import { getHomeData } from '../../api/api'
// 图片懒加载
Vue.use(Lazyload)
// 商品卡片
Vue.use(Card)
// 优惠卷
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠30元',
  reason: '',
  value: 3000,
  name: '优惠券名称',
  startAt: 1584362582,
  endAt: 1604362582,
  valueDesc: '30',
  unitDesc: '元'
}
Vue.use(CouponCell)
Vue.use(CouponList)
// 弹出层
Vue.use(Popup)
// 字体
Vue.use(Icon)
// 地址栏
Vue.use(Area)
export default {
  data () {
    return {
      areaList: {},
      show: false,
      spanTxt: '广州市海珠区',
      // 优惠卷
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false,
      list: []
    }
  },
  methods: {
    addObj () {
      this.areaList = areaList
    },
    showPopup () {
      this.show = true
    },
    cancel () {
      this.show = false
    },
    confirm (arr) {
      // console.log(arr)
      const address = arr[2] === undefined ? arr[1].name : arr[1].name + arr[2].name
      this.spanTxt = address
      window.localStorage.setItem('address', address)
      this.show = false
    },
    // 优惠卷
    onChange (index) {
      this.showList = false
      this.chosenCoupon = index
    },
    onExchange (code) {
      this.coupons.push(coupon)
    }
  },
  async created () {
    this.addObj()
    console.log(this.areaList)
    this.spanTxt = window.localStorage.getItem('address') || '广州市海珠区'
    const { datalist } = await getHomeData()
    this.list = datalist
    console.log(this.list)
  }
}
</script>
<style lang="less" scoped>
@import "../../style/index.less";
.cart {
  .header {
    .h(45);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    margin-bottom: 16px;
    .iconAdds {
      font-size: 17px;
      vertical-align: sub;
    }
    span:nth-of-type(1) {
      font-size: 14px;
      color: #999;
      padding-left: 10px;
    }
    span:nth-of-type(2) {
      font-size: 14px;
      color: #333;
      padding-right: 10px;
    }
  }
  .cardBox {
    background: #fff;
    margin-top: 0;
    box-sizing: border-box;
  }
}
</style>
