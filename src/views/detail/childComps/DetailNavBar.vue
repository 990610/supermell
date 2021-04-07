<template>
  <div class="detailNavBar">
    <nav-bar>
      <div slot="left" class="back">
        <div class="iconfont" @click="backClick">&#xe609;</div>
      </div>
      <div slot="center" class="title">
        <div v-for="(detailItem, index) in titles" 
             :key="detailItem" 
             class="detailitem"
             :class="{active: index === currentIndex}"
             @click="titleClick(index)">
            {{detailItem}}
        </div>
      </div>
    </nav-bar>
  </div>

</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'
export default {
  components: { NavBar },
  name: "DetailNavBar",
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick',index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
@import "../../../assets/img/左箭头/iconfont.css";
  .back {
    margin-left: 30px;
    margin-right: 30px;
  }
  .title{
    display: flex;
    font-size: 15px;
  }
  .detailitem {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }

</style>