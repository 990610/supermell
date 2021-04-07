<template>
    <div  class="comment-info" v-if="Object.keys(commentInfo).length !==0">
      <div>
        <div>用户评价</div>
        <div>
          更多
          <i></i>
        </div>
      </div>
      <div>
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div>
        <p>{{commentInfo.content}}</p>
        <div>
          <span>{{commentInfo.created | showDate}}</span>
          <span>{{commentInfo.style}}</span>
        </div>
        <div>
          <img :src="item" v-for="(item,index) in commentInfo.images" :key="index">
        </div>
      </div>
    </div>
</template>
<script>
import {formatDate} from '@/commonjs/utils.js'
export default {
  name:'DetailCommentInfo',
  props: {
    commentInfo: {
      type:Object,
      default() {
        return{}
      }
    }
  },
  filters: {
    showDate(value) {
      // 1.将时间戳（毫秒）转成Date对象
      const date = new Date(value * 1000)
      // 2.将date进行改格式化
      return formatDate(date, 'yyyy/MM/dd hh:mm:ss')
    }
  }
}
</script>
<style scoped>
  .comment-info {
    background-color: silver;
    border-bottom: 5px solid #fff;
  }
  img {
    width: 100%;
  }

</style>