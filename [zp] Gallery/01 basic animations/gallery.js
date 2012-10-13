Math.rnd = Math.random;
Math.random = function (a,b){
	return (!a && !b) ? Math.rnd() : Math.floor(Math.rnd()*(b-a+1))+a;
}

$(function(){
	var pics = $('div.gallery a'),
		maxWidth = window.innerWidth,
		maxHeight = window.innerHeight,
		aniDue = 1200,
		aniStep = 300,
		aniDelay = 100;

	pics.each(function(){
		var that = this;
		setTimeout(function (){
			$(that).animate({
				left : Math.random(0,maxWidth - 200 ),
				top : Math.random(0,maxHeight -200 )
			},aniDue,'cubic-bezier(.05,.7,.3,.95)');

		},aniDelay);
		aniDelay += aniStep;
	});
	pics.click(function(){return false;})

	pics.on('click','img',function(){
		pics.each(function(){
			if($(this).css('left')=='100px'){
				$(this).animate({
					left : Math.random(0,maxWidth - 200 ),
					top : Math.random(0,maxHeight -200 ),
					zIndex:0
				})
				$('img',$(this).parent()).animate({
					width:120
				},1000);
				
				$('p',$(this).parent()).css(//try to use siblings
					'display' , 'none'
				);
			}
			
		})
		//$(this).parent().append("<p>close</p>");

		$(this).parent().animate({
			left:100,
			top:100,
			zIndex :100,
		},1000);

		$('img',$(this).parent()).animate({//try to use siblings
			width:500
		},1000);

		$('p',$(this).parent()).css(//try to use siblings
			'display' , 'block'
		);		
	});
	pics.on('click','p',function(){
		$(this).parent().animate({
			left : Math.random(0,maxWidth - 200 ),
			top : Math.random(0,maxHeight -200 ),
			zIndex :0,
		})
		$('img',$(this).parent()).animate({
			width:120
		},1000);

		$('p',$(this).parent()).css(//try to use siblings
			'display' , 'none'
		);
	})
});


