<template>
  <div class="cart-list">
    <scroll class="wraper" ref="scroll">
      <cart-list-item v-for="(item,index) in this.$store.state.cartList" :key="index" :product='item'></cart-list-item> 
    </scroll>
 </div>
  
</template>
<script>
import Scroll from '../../../components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem.vue'
export default {
  components: { Scroll, CartListItem },
  name:'cartList',
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>
<style scoped>
  .cart-list {
    height: calc(100vh - 44px - 49px - 40px);
  }

  .wraper {
    height: 100% ;
    overflow: hidden;

  }

</style>