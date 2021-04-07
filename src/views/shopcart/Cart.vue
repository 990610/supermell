<template>
  <div>
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list/>
    
    <!-- 底部汇总 -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'
import CartList from './childComps/CartList.vue'
export default {
  components: { NavBar, CartList, CartBottomBar },
  name: 'Cart',
  computed: {
    cartLength() {
      return this.$store.state.cartList.length
    }
  }
}
</script>

<style>
  .nav-bar {
    background-color:  var(--color-tint);
    color: #fff;
  }

</style>