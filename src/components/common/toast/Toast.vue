<template>
  <div class="toast" v-show="show">
     <div>{{message}}</div>
  </div>
</template>
<script>
export default {
  name: 'Toast',
  props: {
    message: {
      type: String,
      default:'加入购物车'
    },
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style scoped>
  .toast {
    position: fixed;
    width: 150px;
    height: 40px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 20px;
    color: rgb(243, 116, 116);
    background-color: rgba(88, 85, 85, 0.45);
    padding: 8px 10px;

  }
</style>