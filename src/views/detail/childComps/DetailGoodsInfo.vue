<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length !==0">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad">
      <!-- @load监听图片加载完 -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      counter :0,
      imagesLength: 0
    }
  },
  methods: {
    imgLoad() {
      // 每执行一次，counter+1，先加再对比，让计数器等于整个图片的长度
      if(++this.counter === this.detailInfo.detailImage[0].list.length) {
        this.$emit('imageLoad')
      }
    }
  },
  // 监听属性的改变
  // watch: {
  //   datailInfo() {
  //     // 获取图片的个数
  //     this.imagesLength = this.detailInfo.detailImage[0].list.length
  //   }
  // }
}
</script>
<style scoped>
  .info-list img {
    width: 100%;
  }
  
</style>