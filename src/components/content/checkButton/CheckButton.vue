<template>
  <div class="check-button" :class="{active:isChecked}">
    <img src="../../../assets/img/cart/tick.svg" alt="">
  </div>
</template>
<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: false
      // 在每一个商品对象中添加一个属性记录是否选中
    }
  }
}
</script>
<style scoped>
  .check-button {
    /* background-color: red; */
    border-radius: 50%;
    border: 1px solid #aaa;
  }
  .active {
    background-color: red;
    border-color: red;
  }

</style>