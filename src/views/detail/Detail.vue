<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick='titleClick' ref="nav"/>
    <scroll class="detail-scroller" ref="scroll" @scroll="detailPosition" :probe-type="3">
      <!-- <div>{{this.$store.cartList[0]}}</div> -->
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info='detailInfo' @imageLoad='imgLoad'></detail-goods-info>
      <detail-params-info :param-info='paramInfo' ref="params"></detail-params-info>
      <detail-comment-info :comment-info='commentInfo' ref="comment"></detail-comment-info>
      <goods-list :goods='recommends' ref="recommend"/> 
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBacktop" />
    <detail-bottom-bar @click.native="addTo"/>
    <toast :message="message" :show="show" />
  </div>
  
</template>

<script>
import Scroll from '../../components/common/scroll/Scroll.vue'
import DetailNavBar from './childComps/DetailNavBar.vue'
import {getDetail, getRecomment,Goods , Shop ,GoodsParam} from '@/network/detail.js'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import {debounce} from '@/commonjs/utils.js'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamsInfo from './childComps/DetailParamsInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'
import Toast from '../../components/common/toast/Toast.vue'


export default {
  components: {
    DetailNavBar, 
    DetailSwiper, 
    DetailBaseInfo, 
    Scroll,
    DetailShopInfo, 
    DetailGoodsInfo, 
    DetailParamsInfo,
    DetailCommentInfo, 
    GoodsList, 
    DetailBottomBar, 
    BackTop,
    Toast },
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends:[],
      themeTopY: [],
      currentIndex: 0,
      isShowBacktop: false,
      message:'',
      show: false
    }
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.id
    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.result;
      // 1.获取顶部的轮播数据
      this.topImages = data.itemInfo.topImages,
      //2. 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns , data.shopInfo.services)
      // 3.创建店铺信息
      this.shop = new Shop(data.shopInfo)
      // 4.保存商品详细数据
      this.detailInfo = data.detailInfo
      // 5.获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info , data.itemParams.rule)
      // 6.取出评论信息
      if(data.rate.cRate !==0) {
        this.commentInfo = data.rate.list[0]
      }
    //   // 7.获取四个主题的offsetTop,需要用到nextTick函数 。根据最新数据，对应DOM已经被渲染，但是图片还没加载完
    //   this.$nextTick(() => {
    //   this.themeTopY.push(0);
    //   this.themeTopY.push(this.$refs.params.$el.offsetTop);
    //   this.themeTopY.push(this.$refs.comment.$el.offsetTop);
    //   this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
    //   console.log(this.themeTopY)
    // })
    })
    //3. 请求推荐数据
    getRecomment().then(res => {
      // console.log(res);
      this.recommends = res.data.list;
    })


  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,200)/**调用防抖函数 */
    this.$bus.$on('detailItemImageLoad',() => {
      refresh()
    })

  },
  methods: {
    imgLoad() {
      this.$refs.scroll.scroll.refresh();
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.params.$el.offsetTop);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
      // this.themeTopY.push(Number.MAX_VALUE);
      // console.log(this.themeTopY);

    },
    // 监听NavBar的点击
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopY[index], 600)
      
    },
    // 监听滚动(scroll的滚动)
    detailPosition(position) {
      // 1.
      const positionY = -position.y;
      // console.log(positionY)
      // for in，是遍历索引， for of 是遍历元素的值  特别注意：i 是字符串 i+1 = i1
      // 0-13286，index 0
      // 13286-13590，index 1
      // 13590-14830，index 2
      // 14830，index 3
      const length = this.themeTopY.length;
      // 方法一：forin
      for(let i in this.themeTopY) {
        if(this.currentIndex !=i &&  (i < length-1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i*1+1] ) || (i == length-1 && positionY >= this.themeTopY[i])) {
          this.currentIndex = i*1;/*强制转换成number类型  */
          // this.currentIndex = parseInt(i) /*或者用全局方法parseInt转换成number */
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      // 方法二 ：
      // for(let i = 0; i < length; i++) {
      //   if((i < length-1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i*1+1] ) || (i == length-1 && positionY >= this.themeTopY[i])) {
      //     console.log(i)
      //     this.currentIndex = i;
      //     this.$refs.nav.currentIndex = this.currentIndex
      //   }
      // }
      // 方法三： 向数组添加一个最大值，减小判断条件的复杂度
      // this.themeTopY.push(Number.MAX_VALUE);

      // 2.判断BackTop是否显示
     this.isShowBacktop =  (-position.y) > 1000;
    },
    backClick() {
      // 在首页里可以访问组件Scroll中的方法，refresh(),scrollTo()等
      this.$refs.scroll.scroll.scrollTo(0, 0, 600)
    },
    addTo() {
      const obj = {};
      obj.id = this.iid;
      obj.img = this.topImages[0];
      obj.desc = this.goods.desc;
      obj.lowprice = this.goods.lowPrice;
      obj.oldprice = this.goods.oldPrice;
      obj.title = this.goods.title;
      // console.log(obj)
      // 将商品添加到购物车用Vuex
      // this.$store.cartList.push(obj),不直接改动state中的数据
      this.$store.dispatch('addCart',obj).then(res => {//当商品成功添加到购物车时，用promise执行异步操作，返回添加的商品结果，所以加上.then
        // console.log(res)
        this.message = res;
        this.show = true;
        setTimeout(() => {
          this.show = false;
          this.message = ''
        },1500)
      })
      
    }
  }
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 15;
    height: calc(100vh - 44px - 53px);
    background-color: #fff;
  }
  .detail-nav {
    position: relative;
    left: 0;
    right: 0;
    top: 0px;
    z-index: 9;
    background-color: #fff;
  }
  .detail-scroller {
    /* position: relative; */
    overflow: hidden;
    /* top: 40px; */
    height:100% ;
    /* bottom: 100px */
  }

</style>