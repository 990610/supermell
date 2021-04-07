<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="DSwiper in topImages" :key="DSwiper">
      <img :src="DSwiper" @load="dsImageLoad" alt="">
    </swiper-item>
  </swiper>

</template>

<script>
// import Swiper from '@/commponents/common/swiper/Swiper.vue'
// import Swiperitem from '@/commponents/common/swiper/Swiperitem.vue'
import {SwiperItem, Swiper} from '@/components/common/swiper' /**可以整体导入因为swiper文件里有一个index.js */

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    dsImageLoad() {
      this.$bus.$emit('ImageLoad')
    }
  }
}
</script>

<style scoped>
  .detail-swiper {
    height: 250px;
    overflow: hidden;
  }

</style>