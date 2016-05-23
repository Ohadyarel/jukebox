$(document).ready(function(){

	var bg = [
		'url(https://images.unsplash.com/photo-1441803293480-6d6c52f377d9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=d9d0520d232f3ac43a3c92f5f1cdfb9a) no-repeat center center fixed',
		'url(https://images.unsplash.com/photo-1460500063983-994d4c27756c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=27c2758e7f3aa5b8b3a4a1d1f1812310) no-repeat center center fixed',
		'url(https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=b09f84e8e8fd58ee91faf817b9f903d7) no-repeat center center fixed',
		'url(https://images.unsplash.com/photo-1434434319959-1f886517e1fe?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=218dfdd2c0735dbd6ca0f718064a748b) no-repeat center center fixed',
		'url(https://images.unsplash.com/photo-1433190152045-5a94184895da?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=4578a679069b9fb7be2d39d5d2d1e2bf) no-repeat center center fixed',
		'url(https://images.unsplash.com/photo-1422157245273-e08b638b4b00?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=2cfa40d600f0f09caad859b32d3be80e) no-repeat center center fixed',
		'url(https://images.unsplash.com/photo-1434871619871-1f315a50efba?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=3281bb702a6886af18829c77bb47d103) no-repeat center center fixed',
		'url(https://images.unsplash.com/photo-1436407886995-41f8f5ee43ad?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=e7d757a5f131aa2fcaa01e41757b9165) no-repeat center center fixed',
		'url(https://images.unsplash.com/photo-1445964047600-cdbdb873673d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=c6665e8c83154faddeb6b9d253871486) no-repeat center center fixed'

	];
	setInterval(function() {
		var random = Math.floor(Math.random() * bg.length);
		$('body').css('background',bg[random]).fadeIn();
		$('body').css('background-size','cover');
}, 120000);
})