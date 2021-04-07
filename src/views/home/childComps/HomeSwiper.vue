<template>
  <div class="homeswiper">
    <swiper>
      <swiper-item v-for="item in banners" :key="item.index" >
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
     </swiper>
  </div>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper.vue'
import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'
export default {
  name: 'HomeSwiper',
  data() {
    return {
      isLoad: false
    }
  },
  props:{
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: { 
    Swiper,
    SwiperItem 
  },
  methods: {
    imageLoad() {
      if(!this.isLoad) {
        this.$emit('swiperImageLoad');
        this.isLoad = true
      }
      
    }
  }
  
}
</script>

<style scoped>
</style>


