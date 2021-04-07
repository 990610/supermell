<template>
  <div class="recommend">
    <div v-for="(ReVwItems,index) in recommends" class="recommend-item" :key="index">
      <a :href="ReVwItems.link">
        <img :src="ReVwItems.image" alt="">
        <div>{{ReVwItems.title}}</div>
      </a>      
    </div>
  </div>  
</template>
<script>
export default {
  name: "RecommendView",
  props: {
    recommends:{
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0px 10px 0px;
    border-bottom: 8px solid #eeeeee;
  }
  .recommend-item {
    flex: 1;
  }
  img {
    width: 75px;
    height: 75px;
    margin-bottom: 10px;
  }


</style>