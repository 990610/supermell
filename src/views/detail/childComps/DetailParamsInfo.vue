<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !==0">
    <table v-for="(table, index) in paramInfo.sizes" :key="index">
      <tr v-for="(tr,index) in table" :key="index">
        <td v-for="(td,index) in tr" :key="index">{{td}}</td>
      </tr>
    </table>
    <table>
      <tr v-for="(info, index) in paramInfo.infos" :key="index">
        <td>{{info.key}}</td>
        <td>{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !==0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
  
</template>
<script>
export default {
  name: 'DetailParamsInfo',
  props: {
    paramInfo:{
      type: Object,
      default() {
        return{}
      }
    }
  }

}
</script>

<style scoped>
  .info-img img {
    width: 100%;
  }

</style>