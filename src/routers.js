module.exports = function(router){
  router.map({
    '/': {
      name:'my_todo',
      component:require('./my_todo.vue'),
    },
    '/dispatch_ruku': {
      name:'dispatch_ruku',
      component:require('./distribute_ruku.vue')
    },
    '/manage_ruku': {
      name:'manage_ruku',
      component:require('./manage_ruku.vue')
    },
    '/manage_inku': {
      name:'manage_inku',
      component:require('./manage_inku.vue')
    },
    '/manage_outku': {
      name:'manage_outku',
      component:require('./manage_outku.vue')
    }
  });

  window.routeList=[];
  router.beforeEach(function(transition){
    if(transition.to.name == 'forbidden'){
      router.app.authenticating = true
			setTimeout(function(){
				router.app.authenticating = false
				alert('此路由在全局中设置为中止');
				transition.abort();
			},1500);
    }

    if(routeList.length > 1 && transition.to.name==routeList[routeList.length-2]['name']){
			router.app.effect='back';
			routeList.splice(routeList.length-1,1);
		} else {
			router.app.effect='fade';
			routeList.push({
				name : transition.to.name,
				path : transition.to.path,
				query : transition.to.query,
				params : transition.to.params,
				timer: +new Date
			});
		}

    transition.next();
  });

  //记录访问路径
  router.afterEach(function(transition){
		for (var i = 0; i < routeList.length; i++) {
			console.log(routeList[i].name);
		};
	});
}
