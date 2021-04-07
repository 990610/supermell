<template>
  <div id="home">
    <nav-bar class="home-nav"> <div slot="center">购物车</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" 
                 @tabClick='tabClick1' 
                 ref="tabControl1"
                 class="tab-control"
                 v-show="isTabFixd"/>
<!-- 用scroll组件，实现滚动 -->
<!-- 自定义事件scroll，接收滚动的position -->
    <scroll class="home-scroller" 
            ref="scroll" :probe-type="3" 
            :pull-up-load="true" 
            @scroll="contentposition"
            @pullingUp="loadMore"> <!-- 子组件用驼峰，父组件需要用- ；不加：传过去的值是字符串，而需要传一个具体的类型需要：，-->
      <home-swiper :banners="banners" @swiperImageLoad='sImageLoad' />
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control 
        :titles="['流行','新款','精选']"
        @tabClick='tabClick1' 
        ref="tabControl2"/>
      <goods-list :goods="goods[currentType].list"></goods-list> 
    </scroll>
    <!-- native:给组件绑定事件需要添加 -->
    <back-top @click.native="backClick" v-show="isShowBacktop" />
  </div>
</template>

<script>
// 没有default导出的，导入必须加{}
import NavBar from '@/components/common/navbar/NavBar.vue'
import {getHomeMultidata,getHomeGoods} from '@/network/home.js/'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'
import {debounce} from '@/commonjs/utils.js'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      //接收数据并存放
      banners: [],
      recommends: [],
      goods: {
        'pop':{page:0, list:[]},
        'new':{page:0, list:[]},
        'sell':{page:0, list:[]}
      },
      currentType : 'pop',
      isShowBacktop: false,
      taboffsetTop: 0,
      isTabFixd: false
    }
  },
  //组件创建完就请求数据，此时还没有渲染页面
  created(){
    //1. 首页中轮播图和推荐中的数据
    this.getHomeMultidata();
    //2. 首页中流行，新款，精选的数据，并且调用同一个方法。
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  // 挂载时加载
  mounted() {
    // 1.监听item中图片加载完成
    /*GoodsListitem组件中不能直接拿到refresh方法，但是首页可以通过$refs拿到scroll里面的refresh方法，
    所以通过事件总线，在GoodsListItem组件发出来一个事件itemImageLoad，在首页中监听，就可以调用refresh方法，*/
    const refresh = debounce(this.$refs.scroll.refresh,200)/**调用防抖函数 */
    this.$bus.$on('homeItemImageLoad',() => {
      refresh()
    })
  },
  destroyed() {
    console.log('---')
  },
  methods: {
    /* 事件监听相关的方法 */
    tabClick1(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;    
      }
      this.$refs.tabControl2.currentIndex = index;
      this.$refs.tabControl1.currentIndex = index;

    },
    contentposition(position) {
      // 判断BackTop是否显示
     this.isShowBacktop =  (-position.y) > 800;
      // 决定tabcontrol是否吸顶
      this.isTabFixd = (-position.y) > this.taboffsetTop
    },
    loadMore() {
    //  console.log('上拉加载更多')
    this.getHomeGoods(this.currentType)
    },
    sImageLoad() {
      // 所有组件都有一个属性$el 用于获取组件中的元素，
      this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    // 点击返回顶部按钮
    backClick() {
      // 在首页里可以访问组件Scroll中的方法，refresh(),scrollTo()等
      this.$refs.scroll.scroll.scrollTo(0, 0)//第一个是取得名字，第二个是new的对象（对象中的方法）
    },
    /* 网络请求相关的方法 */
    getHomeMultidata() {
      // 调用home.js中的函数
      getHomeMultidata().then( res => {
        // 将请求的数据存放在data中，
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      }) 
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      // 调用home.js中的函数
      getHomeGoods(type,page).then(res => {
        // 将请求的数据存放在data中。
        this.goods[type].list.push(...res.data.list);/* ...是一个语法，目的是将res.data.list中数据push进goods中，或者用for遍历*/
        this.goods[type].page +=1;
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    },
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 9;
    top: 0;
  }
  #home {
    padding-top:44px ;
    height: calc(100vh - 44px - 49px);
    position: relative;
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
  .home-scroller {
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 44px;
  }
  
 
</style>