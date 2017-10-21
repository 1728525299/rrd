$(function() {
	/*nav部分*/
	$('.nav-cent li').on('click',function(){
		$(this).children().css('color','#ff721f').end().siblings('li').children('a').css('color', '#000');
	});


	/*banner部分*/
	var timer=null;
	var index=0;
	timer=setInterval(addIndex,4000);

	//图片跳转函数
	function addIndex(){
		index++
		if (index>$('.banner-images>li').length-1) {
			index=0;
		}
		$('.banner-images>li').eq(index).stop().fadeIn(2000).siblings().stop().fadeOut();
		$('.banner-point>li').eq(index).addClass('curent').siblings().removeClass('curent');
	}

	//鼠标放上去停止动画
	$('.banner').hover(function(){
		clearInterval(timer)
	},function(){
		timer=setInterval(addIndex,3000);
	})

	//点击圆点
	$('.banner-point>li').on('click',function(){
		 index=$(this).index();
		$('.banner-images>li').eq(index).stop().fadeIn(2000).siblings().stop().fadeOut();
		$(this).addClass('curent').siblings().removeClass('curent');
	});

	//guide部分
	$('.guide .guide-bottom i').on('click',function(){
		var heig=$('.guide-hide').height();
		if (heig==0) {
			setTimeout($('.guide-hide').css('height',490), 2000);
			$('.guide .guide-bottom').css('paddingBottom','490px');
		} else {
			$('.guide-hide').css('height',0);
		}
	});

	//sidebar
	var scrollTop=0;
	$(window).scroll(function(event) {
		 scrolTop=$(window).scrollTop();	
		 if (scrolTop>300) {
		 	$(".sidebar-cent").fadeIn(600);
		 } else{
		 	$(".sidebar-cent").fadeOut(600);
		 };
	});
	$(".sidebar-cent").click(function(){
		//缓慢上去
		//$("html,body").animate({scrollTop:0},2000,"swing");
		//立马上去
		$(window).scrollTop(0);
	});

	$('.sidebar-li1').on('mouseenter',function(){
		$(this).children("img").attr('src', 'image/side-bar6.png');
	})
});