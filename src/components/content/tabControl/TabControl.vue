<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="(item,index)" class="tab-control-item" @click="itemClick(index)">
      <span :class="{active: index == currentIndex}">{{item}}</span>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index);
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 44px;
    line-height: 44px;
 

    background-color: #ffffff;
  }
  .tab-control-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
    padding: 5px;
  }

</style>