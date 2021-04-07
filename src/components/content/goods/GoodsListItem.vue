<template>
  <div class="goods-item">
    <!-- load函数监听图片 -->
    <img v-lazy="showImage" alt="" @load="imageLoad" @click="itemClick">
    <div class="news">
      <p>{{goodsItem.title}}</p>
      <span class="iconfont">&#xe602;</span>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>

  </div>
  
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imageLoad() {
      if(this.$route.path.indexOf('/home')== 0 ) {
        this.$bus.$emit('homeItemImageLoad')
      }else if(this.$route.path.indexOf('/detail')== 0 ) {
        this.$bus.$emit('detailItemImageLoad')
      }

    },
    itemClick() {
      this.$router.push('./detail/' + this.goodsItem.iid)
    }
  },

}
</script>

<style >
  @import "../../../assets/img/钱图标/iconfont.css";
  .goods-item {
    width: 48%;
    margin: 0 2px  ;
    padding-bottom: 40px;
    position: relative;
  }
  .goods-item img {
    width: 100%;
    /* height: auto; */

    border-radius: 10px;
  }
  .news {
    font-size: 14px;
    position: absolute;
    bottom: 5px;
    right: 0;
    left: 0;
    overflow: hidden;
    text-align: center;
  }
  .news p {
    /* 设置文本不换行，超出的部分用...代替 */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .news .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .collect {
    position: relative;
  }
  .collect::before {
    /* 使用伪元素时，必须加入content属性，否则不会看到任何内容 */
    content: "";
    background: url('../../../assets/img/common/collect.svg') 0 0/14px 14px;
    position: absolute;
    left: -13px;
    top: 2px;
    width: 14px;
    height: 14px;
  }

</style>