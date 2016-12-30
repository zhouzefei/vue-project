<template>
  <div>
    出库管理
  </div>
</template>
<script>
module.exports = {
	data:function(){
		return {
			title:'出库管理'
		}
	},
	route:{
		activate:function(transition){
			this.$root.$set('header',this.title);
			transition.next();
		}
	},
};
</script>
