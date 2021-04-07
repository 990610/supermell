<template>
  <div class="bottom-bar">
    <check-button class="check-button" :is-checked='isSellect' @click.native="checkClick"/>
    <span class="select">全选</span>
    <span>合计：{{totalPrice}}</span>
    <span class="calculate">去计算：{{checkLength}}</span>
  </div>
</template>
<script>
import CheckButton from '../../../components/content/checkButton/CheckButton.vue'
export default {
  components: { CheckButton },
  name:'CartBottomBar',
  data(){
    return {
      money: 0
    }
  },
  computed: {
    totalPrice() {
      this.money = 0
      let res = this.$store.state.cartList.filter(item => {return item.checked})
      for(let i of res) {
        this.money += i.lowprice * i.count
      }
      return this.money.toFixed(2)
    },
    // 方法二：使用高阶函数reduce来求值
    // totalPrice() {
    //   return this.$store.state.cartList.filter(item => {
    //     return item.checked
    //   }).reduce((value, item) => {
    //     return  value + item.lowprice * item.count
    //   }, 0).toFixed(2)
    // },
    checkLength() {
      return this.$store.state.cartList.filter(length => {
        return length.checked
      }).length
    },
    isSellect() {
      /*方法一：filter */
      // if(this.$store.state.cartList.length == 0) {
      //   return false
      // }
      // return !(this.$store.state.cartList.filter(item => !item.checked).length)

      /*方法二： 使用数组高阶函数 find */
      // if(this.$store.state.cartList.length == 0) {
      //   return false
      // }
      // return !(this.$store.state.cartList.find(item => { return!item.checked}))
      /*方法三：普通遍历 */
      if(this.$store.state.cartList.length == 0) {
        return false
      }else {
          for(let i of this.$store.state.cartList) {
            if(!i.checked){
              return false
            }
          }
          return true
      }
    }
  },
  methods:{
    checkClick() {
      if(this.isSellect) { //全部选中
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else { //有一个没有选中
        this.$store.state.cartList.forEach(item => {return item.checked = true})
      }
    }
  }
}
</script>
<style scoped>
/* 块级元素同一行展示:1.浮动float 2.display:inline-block 3.弹性布局flex*/
  .bottom-bar {
    height: 35px;
    /* border: solid black; */
    background-color:#eee;
    position: relative;
    display: flex;
    align-items: center; 
    /* justify-content: center;    */
  }
  .check-button {
    width: 20px;
    height: 20px;
    margin: 0 10px;
  }
  .select {
    margin: 0px  10px 0px 0px;
    font-size: 14px;
  }
  .calculate {
    height: 35px;
    background-color: red;
    color: #fff;
    margin-left: auto;
    font-size: 25px;
  }
</style>