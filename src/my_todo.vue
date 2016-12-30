<template>
  <div>
    <card>
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r flex-2">
          <span>1130</span>
        </div>
        <div class="flex-6">
          入库分配
        </div>
     </div>
    </card>
    <card>
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r flex-2">
          <span>1130</span>
        </div>
        <div class="flex-6">
          入库管理
        </div>
     </div>
    </card>
  </div>
</template>
<script>
import { Group, Cell, Card } from 'vux'
export default {
  components: {
    Group,
    Cell,
    Card
  },
  data:function() {
    return {
      title:'我的代办'
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
@import '~vux/dist/styles/1px.css';
@fontSize:24;
body{
  background: #F3F4F5;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  font-size: 12px;
  &.flex-2{
    flex:2;
    text-align: center;
  }
  &.flex-6{
    flex:6;
    padding-left: 28rem/@fontSize;
  }
}
.card-demo-flex span {
  color: #f74c31;
}
</style>
