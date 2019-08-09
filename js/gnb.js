function default_type(){
	$('.fade_box').stop().delay(100).fadeOut(1000);
	$('.fade_box02').stop().delay(1000).fadeOut(600);
	$('.animation_img img').stop().delay(1000).animate({'top':-1000}, 400, 'easeOutBounce');
};



function list01(){
	$('.slider01 .fade_box').stop().delay(600).fadeIn(2000);
	$('.slider01 .fade_box02').stop().delay(1000).fadeIn(1200);
	$('.slider01 .animation_img img').stop().delay(800).animate({'top':0}, 1000);	
}


function list02(){
	
	$('.slider02 .fade_box').stop().delay(600).fadeIn(2000);
	$('.slider02 .fade_box02').stop().delay(1000).fadeIn(1200);
	$('.slider02 .animation_img img').stop().delay(800).animate({'top':0}, 1000);
}

function list03(){
	
	$('.slider03 .fade_box').stop().delay(600).fadeIn(2000);
	$('.slider03 .fade_box02').stop().delay(1000).fadeIn(1200);
	$('.slider03 .animation_img img').stop().delay(800).animate({'top':0}, 1000);
	
}

function list04(){
	
	$('.slider04 .fade_box').stop().delay(600).fadeIn(2000);
	$('.slider04 .fade_box02').stop().delay(1000).fadeIn(1200);
	$('.slider04 .animation_img img').stop().delay(800).animate({'top':0}, 1000);
	
}


function starList(){

	if($('.slidesjs-pagination li').eq(0).find('a').hasClass('active')){
		default_type();
		list01();
	}

	if($('.slidesjs-pagination li').eq(1).find('a').hasClass('active')){
		default_type();
		list02();
	}	
	
	if($('.slidesjs-pagination li').eq(2).find('a').hasClass('active')){
		default_type();
		list03();
	}
	if($('.slidesjs-pagination li').eq(3).find('a').hasClass('active')){
		default_type();
		list04();
	}
};


$(window).load( function(){


})


function graph_box(graph_name){
  var $ppc = $(graph_name),
	percent = parseInt($ppc.data('percent')),
	deg = 360*percent/100;
  if (percent > 50) {
	$ppc.addClass('gt-50');
  }
  $ppc.find('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
  $ppc.find('.ppc-percents span').html(percent+'%');
}

   



$(document).ready(function(){
	
	graph_box('#graph01');
	graph_box('#graph02');
	graph_box('#graph03');
	graph_box('#graph04');
	graph_box('#graph05');
	graph_box('#graph06');
	
	$(".menu_btn").click(function() {
		$('.topmenu').toggleClass('on');
		return false;
	});	
	
	
	
	$("h1 a").click(function() {
		scrollTo("#scene01", 900, "");
		return false;
	});	
	
	$("#scene01 .img07 a").click(function() {
		scrollTo("#scene02", 900, "");
		return false;
	});	
	
	$('.tabcontents li:first').show();
	$('.tabmenu li a').click(function(){
		var idx = $(this).parent().index();
		$(this).parent().addClass('on');
		$('.tabmenu li a').not(this).parent().removeClass('on');
		$('.tabcontents li').hide().eq(idx).show();
		
		return false;
	});
	
	$('#scene01 .img07').mouseenter(function(){
		var moveImg = $(this).find('img');
		TweenMax.to(moveImg, 1, {css:{top:"8px"}, repeat:-1, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});
	});

	$('#scene01 .img07').mouseleave(function(){		
		var moveImg = $(this).find('img');
		TweenMax.to(moveImg, 1, {css:{top:"0"}, repeat:0, yoyo:true, repeatDelay:0, ease:Quad.easeInOut});		
	});



	$('.pop_btn').click(function(){
		$(this).next('.inner_pop').stop().slideDown(400);
		return false;
	});

	$('.inner_pop .close_pop').click(function(){
		$('.inner_pop').stop().slideUp(300);
		
		return false;
	});
	
	$('.dark_bg').css({'opacity':'0.6'});

	$('.btn02').click(function(){
		$('.dark_bg').stop().fadeIn(400);
		$('.notice_pop').stop().delay(200).fadeIn(400);
		
		return false;
	});
	$('.close_pop02').click(function(){
		$('.dark_bg, .notice_pop').hide();
		
		return false;
	});




	$('.hide_img').css({'opacity':'0'});



	var s1 = 950;
	var s2 = 950;
	var s3 = 950;
	var s4 = 950;
	var s5 = 950;
	var s6 = 1924;


	$(window).bind('scroll', function(e) {
		scrollEvt();
	});
	var scrollLocate
	var numArr = new Array();
	
	function scrollEvt() {
		scrollLocate= $(window).scrollTop();
		$('.positoinNum').text(scrollLocate);
			
		
		
		
		if(scrollLocate <= s1){ // scrollLocate이 s1의 높이값보다 작거나 같을때
			$('.page_btn .inner_gnb > li').removeClass('on');
			$('.page_btn .inner_gnb > li').eq(0).addClass('on');

		}
		
		if(scrollLocate >= s1){
			$('.page_btn .inner_gnb > li').removeClass('on');
			$('.page_btn .inner_gnb > li').eq(1).addClass('on');
		}
		
		if(scrollLocate >= s1+s2){
			$('.page_btn .inner_gnb > li').removeClass('on');
			$('.page_btn .inner_gnb > li').eq(2).addClass('on');
		}
		
		if(scrollLocate >= s1+s2+s3){
			$('.page_btn .inner_gnb > li').removeClass('on');
			$('.page_btn .inner_gnb > li').eq(3).addClass('on');
		}
		
		if(scrollLocate >= s1+s2+s3+s4){
			$('.page_btn .inner_gnb > li').removeClass('on');
			$('.page_btn .inner_gnb > li').eq(4).addClass('on');
		}
		
		if(scrollLocate >= s1+s2+s3+s4 + s5){
			$('.page_btn .inner_gnb > li').removeClass('on');
			$('.page_btn .inner_gnb > li').eq(5).addClass('on');
		}

		
		
		
		
		
		
		
		
		
		
		/*** Scene02 ***/
		if(scrollLocate < 1000){
			$('#scene02 .text01 img').css({'margin-top':((scrollLocate-1000)*0.3)});
			$('#scene02 .text07 img').css({'margin-top':((scrollLocate-1000)*0.3)});
		}
		
		if(scrollLocate < 1000){
			$('#scene02 .text02 img').css({'margin-top':((scrollLocate-1000)*0.3)});
			$('#scene02 .text06 img').css({'margin-top':((scrollLocate-1000)*0.3)});
		}
		
		if(scrollLocate < 1000){
			$('#scene02 .text03 img').css({'margin-top':((scrollLocate-1000)*0.3)});
			$('#scene02 .text05 img').css({'margin-top':((scrollLocate-1000)*0.3)});
		}
		
		if(scrollLocate < 1000){
			$('#scene02 .text04 img').css({'margin-top':((scrollLocate-1000)*0.3)});
		}
		
		
		

		/*** Scene04 ***/
		$('#scene04 .img01').stop().css({'opacity':((scrollLocate-2450)*0.008)});
		$('#scene04 .img02').stop().css({'opacity':((scrollLocate-2500)*0.008)});
		$('#scene04 .img03').stop().css({'opacity':((scrollLocate-2550)*0.008)});
		$('#scene04 .img04').stop().css({'opacity':((scrollLocate-2600)*0.008)});
		$('#scene04 .img05').stop().css({'opacity':((scrollLocate-2650)*0.008)});
		$('#scene04 .img06').stop().css({'opacity':((scrollLocate-2700)*0.008)});
		$('#scene04 .img07').stop().css({'opacity':((scrollLocate-2750)*0.008)});
		$('#scene04 .img08').stop().css({'opacity':((scrollLocate-2800)*0.008)});
		$('#scene04 .img09').stop().css({'opacity':((scrollLocate-2850)*0.008)});
		
		
		
		
		
		
		
		

	}
	
	var scrollMove = false;
	function scrollTo(id, speed, param) {
		if(!scrollMove){
			scrollMove = true;
			$.scrollTo($(id), speed, {
				duration : speed,
				easing : 'swing',
				onAfter : function() {
					scrollMove = false;
					scrollEvt();
				}
			});
		}
	}

	$(".gnb .inner_gnb a").click(function() {
		var thisNum = $(this).index() + 1;
		var idx = $(this).attr('href');
		var speed = 600;
		scrollTo( idx, thisNum*speed, "");
		
		return false;
	});
		
	
	if (window.addEventListener) {
		window.addEventListener('DOMMouseScroll', wheel, false);
		window.onmousewheel = document.onmousewheel = wheel;
	}
	var time = 700;
	var distance = 200;

	function wheel(event) {
		scrollMove = false;
		if ($.browser.msie  && parseInt($.browser.version, 10) <= 8) {
			
		} else {
			if(wheelEn){
				if (event.wheelDelta) delta = event.wheelDelta / 120;
				else if (event.detail) delta = -event.detail / 3;
				handle();
				if (event.preventDefault) event.preventDefault();
				event.returnValue = false;
			}
			if (event.preventDefault) event.preventDefault();
				event.returnValue = false;
			
		}
	}
	function handle() {
		$('html, body').stop().animate({
			scrollTop: $(window).scrollTop() - (distance * delta)
		}, time, function(){
			//scrollEvt();
			/*
			if(scrollLocate > 900 && scrollLocate < 1100)scrollTo("#scene02", 200, "");
			if(scrollLocate > 1900 && scrollLocate < 2100)scrollTo("#scene03", 200, "");
			if(scrollLocate > 2900 && scrollLocate < 3100)scrollTo("#scene04", 200, "");
			if(scrollLocate > 3900 && scrollLocate < 4100)scrollTo("#scene05", 200, "");
			if(scrollLocate > 4900 && scrollLocate < 5100)scrollTo("#scene06", 200, "");
			*/
		});
	}
	
	var wheelEn = true;
	OnScroll = function(){
		wheelEn = true;
	}
	WhileScrolling = function(){
		wheelEn = false;
	}
	
	
	
})