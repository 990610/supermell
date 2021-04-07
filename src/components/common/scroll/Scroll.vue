<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new Bscroll(this.$refs.wrapper,{
      click: true,
      pullUpLoad: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    // 2.打印滑动位置
    this.scroll.on('scroll',(position) =>{
      // 将position 传出去用自定义事件，取名叫scroll
      this.$emit('scroll',position);
    })
    // 3.监听滚动到底部事件
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp',() => {
        // console.log('上拉加载更多');
        this.$emit('pullingUp')
    })
    }
  
    // 4.实现多次上拉
    // this.scroll.fini
  },
  methods: {
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  }
}
</script>
