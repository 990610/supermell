<template>
  <div>
    <!-- <div class="wrapper" ref="wrapper">
    第二层元素
    <ul>
      内容区
      <li>{列表1}</li>
      <li>{列表2}</li>
      <li>{列表3}</li>
      <li>{列表4}</li>
      <li>{列表5}</li>
      <li>{列表6}</li>
      <li>{列表7}</li>
      <li>{列表8}</li>
      <li>{列表9}</li>
      <li>{列表10}</li>
      <li>{列表11}</li>
      <li>{列表12}</li>
      <li>{列表13}</li>
      <li>{列表14}</li>
      <li>{列表15}</li>
      <li>{列表16}</li>
      <li>{列表17}</li>
      <li>{列表18}</li>
      <li>{列表19}</li>
      <li>{列表20}</li>
      <li>{列表21}</li>
      <li>{列表22}</li>
      <li>{列表23}</li>
      <li>{列表24}</li>
      <li>{列表25}</li>
      <li>{列表26}</li>
      <li>{列表27}</li>
      <li>{列表28}</li>
      <li>{列表29}</li>
      <li>{列表30}</li>
      <li>{列表31}</li>
      <li>{列表32}</li>
      <li>{列表33}</li>
      <li>{列表34}</li>
      <li>{列表35}</li>
      <li>{列表36}</li>
      <li>{列表37}</li>
      <li>{列表38}</li>
      <li>{列表39}</li>
      <li>{列表40}</li>
      <li>{列表41}</li>
      <li>{列表42}</li>
      <li>{列表43}</li>
      <li>{列表44}</li>
      <li>{列表45}</li>
      <li>{列表46}</li>
      <li>{列表47}</li>
      <li>{列表48}</li>
      <li>{列表49}</li>
      <li>{列表50}</li>
    </ul>
    </div>  -->
    <scroll class="wrapper">
      <ul>
      <li>{列表1}</li>
      <li>{列表2}</li>
      <li>{列表3}</li>
      <li>{列表4}</li>
      <li>{列表5}</li>
      <li>{列表6}</li>
      <li>{列表7}</li>
      <li>{列表8}</li>
      <li>{列表9}</li>
      <li>{列表10}</li>
      <li>{列表11}</li>
      <li>{列表12}</li>
      <li>{列表13}</li>
      <li>{列表14}</li>
      <li>{列表15}</li>
      <li>{列表16}</li>
      <li>{列表17}</li>
      <li>{列表18}</li>
      <li>{列表19}</li>
      <li>{列表20}</li>
      <li>{列表21}</li>
      <li>{列表22}</li>
      <li>{列表23}</li>
      <li>{列表24}</li>
      <li>{列表25}</li>
      <li>{列表26}</li>
      <li>{列表27}</li>
      <li>{列表28}</li>
      <li>{列表29}</li>
      <li>{列表30}</li>
      <li>{列表31}</li>
      <li>{列表32}</li>
      <li>{列表33}</li>
      <li>{列表34}</li>
      <li>{列表35}</li>
      <li>{列表36}</li>
      <li>{列表37}</li>
      <li>{列表38}</li>
      <li>{列表39}</li>
      <li>{列表40}</li>
      <li>{列表41}</li>
      <li>{列表42}</li>
      <li>{列表43}</li>
      <li>{列表44}</li>
      <li>{列表45}</li>
      <li>{列表46}</li>
      <li>{列表47}</li>
      <li>{列表48}</li>
      <li>{列表49}</li>
      <li>{列表50}</li>
      </ul>
    </scroll>
      <ul class="wrapper">
      <li>{列表1}</li>
      <li>{列表2}</li>
      <li>{列表3}</li>
      <li>{列表4}</li>
      <li>{列表5}</li>
      <li>{列表6}</li>
      <li>{列表7}</li>
      <li>{列表8}</li>
      <li>{列表9}</li>
      <li>{列表10}</li>
      <li>{列表11}</li>
      <li>{列表12}</li>
      <li>{列表13}</li>
      <li>{列表14}</li>
      <li>{列表15}</li>
      <li>{列表16}</li>
      <li>{列表17}</li>
      <li>{列表18}</li>
      <li>{列表19}</li>
      <li>{列表20}</li>
      <li>{列表21}</li>
      <li>{列表22}</li>
      <li>{列表23}</li>
      <li>{列表24}</li>
      <li>{列表25}</li>
      <li>{列表26}</li>
      <li>{列表27}</li>
      <li>{列表28}</li>
      <li>{列表29}</li>
      <li>{列表30}</li>
      <li>{列表31}</li>
      <li>{列表32}</li>
      <li>{列表33}</li>
      <li>{列表34}</li>
      <li>{列表35}</li>
      <li>{列表36}</li>
      <li>{列表37}</li>
      <li>{列表38}</li>
      <li>{列表39}</li>
      <li>{列表40}</li>
      <li>{列表41}</li>
      <li>{列表42}</li>
      <li>{列表43}</li>
      <li>{列表44}</li>
      <li>{列表45}</li>
      <li>{列表46}</li>
      <li>{列表47}</li>
      <li>{列表48}</li>
      <li>{列表49}</li>

      </ul>

  </div>
<!-- 第一层元素 -->
  
  
</template>

<script>
// import Bscroll from 'better-scroll';
import Scroll from '../../components/common/scroll/Scroll.vue';

export default {
  name: 'Category',
  components: {
    Scroll
  },
/*   mounted() {
    // scroll可以在data中定义，也可以不定义
    
    this.scroll = new Bscroll(this.$refs.wrapper, {
      probeType: 3,
      click: true,
      pullUpLoad: true
    })
    // 
    // this.scroll.on('scroll',(position) => {
    //   console.log(position);
    // }),
    // this.scroll.on('pullingUp',() => {
    //   console.log('上拉加载更多');
    // })
  } */
}
</script>

<style scoped>
/*
* 使用Bscroll,要满足格式的dom结构，即内容外包裹两层元素(wrapper content),且wrapper要
  设置高度。
*/
.wrapper {
  height: 300px;
  background-color: silver;
  overflow: hidden;
}


</style>