import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建Store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
  },
  actions: {
    addCart(context,payload) {
      return new Promise((resolve, reject) => {//action可以返回一个promise用于后面商品添加的状态
        // 1.查找之前数组中是否含有该商品，通过数组方法find
        let oldGoods = context.state.cartList.find(item => item.id === payload.id)
        // 2.判断oldGoods
        if(oldGoods) {//当前的商品数量+1
          oldGoods.count += 1
          resolve('当前的商品数量+1')
        }else {//添加新的商品
          payload.count = 1
          payload.checked = true
          context.state.cartList.push(payload);
          resolve('添加新的商品')
        }
      }) 
    }
  }
})

// 3.挂载Vue实例
export default store
