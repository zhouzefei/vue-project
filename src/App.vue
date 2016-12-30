<template>
  <div>
    <h1 v-text="header" class="hide">App Header</h1>
    <tabbar class="vux-demo-tabbar" icon-class="vux-center" v-show="!isTabbarDemo" slot="bottom">
      <tabbar-item v-link="{name:'my_todo',exact:true}">
        <span slot="icon" class='tabbar-icon my-todo'></span>
        <span slot="label">我的待办</span>
      </tabbar-item>
      <tabbar-item v-link="{name:'dispatch_ruku'}">
        <span slot="icon" class='tabbar-icon dispatch-ruku'></span>
        <span slot="label">入库分配</span>
      </tabbar-item>
      <tabbar-item  v-link="{name:'manage_ruku'}">
        <span slot="icon" class='tabbar-icon manage-ruku'></span>
        <span slot="label">入库管理</span>
      </tabbar-item>
      <tabbar-item v-link="{name:'manage_inku'}">
        <span slot="icon" class='tabbar-icon manage-inku'></span>
        <span slot="label">在库管理</span>
      </tabbar-item>
      <tabbar-item v-link="{name:'manage_outku'}">
        <span slot="icon" class='tabbar-icon manage-outku'></span>
        <span slot="label">出库管理</span>
      </tabbar-item>
    </tabbar>
    <router-view class="view" id="view" keep-alive :transition="effect" transition-mode="out-in"></router-view>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data:function() {
    return {
      header: '首页'
    }
  }
}
</script>
<style lang="less">
@fontSize:24;
@import '~vux/dist/vux.css';
.vux-demo-tabbar{
  background-color: #fff;
}
.vux-demo-tabbar:before{
  border-top: 1px solid #e7e7e7;
}
.weui_tabbar_item.custom-active-class .weui_tabbar_label{
  color:#6C94F7;
}
.weui_tabbar_icon{
  width: 45rem/@fontSize;
  height:45rem/@fontSize;
}
.my-todo{
  background: url("./assets/tabbar/icon1.png") no-repeat;
  background-size: 100% 100%;
}
.weui_tabbar_item.custom-active-class .my-todo{
  background: url("./assets/tabbar/icon1_blue.png") no-repeat;
  background-size: 100% 100%;
}
.dispatch-ruku{
  background: url("./assets/tabbar/icon2.png") no-repeat;
  background-size: 100% 100%;
}
.weui_tabbar_item.custom-active-class .dispatch-ruku{
  background: url("./assets/tabbar/icon2_blue.png") no-repeat;
  background-size: 100% 100%;
}
.manage-ruku{
  background: url("./assets/tabbar/icon3.png") no-repeat;
  background-size: 100% 100%;
}
.weui_tabbar_item.custom-active-class .manage-ruku{
  background: url("./assets/tabbar/icon3_blue.png") no-repeat;
  background-size: 100% 100%;
}
.manage-inku{
  background: url("./assets/tabbar/icon4.png") no-repeat;
  background-size: 100% 100%;
}
.weui_tabbar_item.custom-active-class .manage-inku{
  background: url("./assets/tabbar/icon4_blue.png") no-repeat;
  background-size: 100% 100%;
}
.manage-outku{
  background: url("./assets/tabbar/icon5.png") no-repeat;
  background-size: 100% 100%;
}
.weui_tabbar_item.weui_bar_item_on .manage-outku{
  background: url("./assets/tabbar/icon5_blue.png") no-repeat;
  background-size: 100% 100%;
}
.tabbar-icon{
  width: 100%;
  height:100%;
  display:block;
}
.weui_tabbar_icon{
  margin-bottom: 6rem/@fontSize;
}
.weui_tabbar_icon+.weui_tabbar_label{
  margin-top: 0;
  label{
    font-size: 20rem/@fontSize;
  }
}
.weui_tabbar_item{
  padding: 20rem/@fontSize 0;
}
.weui_tabbar{
  height: 120rem/@fontSize;
}
/*
动画效果
*/
[v-cloak] {
  display: none;
}
.view {
  transition: all .3s ease;
}
.fade-enter{
  opacity: 1;
  transform: translate3d(100%, 0, 0);
}
.fade-leave {
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}
.back-enter {
  opacity: 1;
  -webkit-transform: translate3d(-110%, 0, 0);
          transform: translate3d(-110%, 0, 0);
}
.back-leave{
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}
.hide{
  display: none;
}
</style>
