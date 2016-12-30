<template>
  <div style='height:100%;'>
    <sticky>
      <tab class='top-nav' :line-width=2 active-color='#6C94F7' default-color='#373737' :index.sync="index">
        <tab-item class="vux-center vux-1px-r" :selected="demo2 === item" v-for="item in list2" @click="demo2 = item">{{item}}</tab-item>
      </tab>
    </sticky>
    <swiper :index.sync="index" height="300px" :show-dots="false">
      <swiper-item v-for="item in list2">
        <div class="tab-swiper vux-center">{{item}} Container</div>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Tab, TabItem, Swiper, SwiperItem, Sticky } from 'vux'
const list = () => ['待分配', '部分分配', '完成分配', '作废']
export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Sticky
  },
  data () {
    return {
      demo2: '待分配',
      list2: list(),
      index: 0,
      title:'入库分配'
    }
  },
  route:{
		activate:function(transition){
			this.$root.$set('header',this.title);
			transition.next();
		}
	},
}
</script>
<style lang="less">
@import '~vux/src/styles/1px.less';
@fontSize:24;
.top-nav{
  height:90rem/@fontSize;
  &.vux-tab .vux-tab-item{
    line-height:90rem/@fontSize;
    box-sizing:border-box;
    position:relative;
    &:not(:first-of-type):after{
      content:'';
      position: absolute;
      left: 0;
      top: 0;
      height: 200%;
      width: 1px;
      border-left:1px solid #e7e7e7;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
    }
  }
}
</style>
