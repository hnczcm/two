/*
* @Author: hp
* @Date:   2019-07-30 18:33:54
* @Last Modified by:   hp
* @Last Modified time: 2019-08-16 11:17:44
*/
$(function (){
	$('.tab_a').mouseenter(function(event){
		$('.gd').css('display','block');
		$('.tab_a').css('background','white');
		$('.tab_a').css('color','black');
	});
	$('.gd').mouseenter(function(event){
		$('.gd').css('display','block');
		$('.tab_a').css('background','white');
		$('.tab_a').css('color','black');
	});
	$('.tab_a').mouseleave(function(event) {
		$('.gd').css('display','none');
		$('.tab_a').css('background','#000');
		$('.tab_a').css('color','#999');
	});
	$('.gd').mouseleave(function(event) {
		$('.gd').css('display','none');
		$('.tab_a').css('background','#000');
		$('.tab_a').css('color','#999');
	});
	$('.tab_b').mouseenter(function(event){
		$('.xfzqy').css('display','block');
		$('.tab_b').css('background','white');
		$('.tab_b').css('color','black');
	});
	$('.xfzqy').mouseenter(function(event){
		$('.xfzqy').css('display','block');
		$('.tab_b').css('background','white');
		$('.tab_b').css('color','black');
	});
	$('.tab_b').mouseleave(function(event) {
		$('.xfzqy').css('display','none');
		$('.tab_b').css('background','#000');
		$('.tab_b').css('color','#999');
	});
	$('.xfzqy').mouseleave(function(event) {
		$('.xfzqy').css('display','none');
		$('.tab_b').css('background','#000');
		$('.tab_b').css('color','#999');
	});
	$('.tab_c').mouseenter(function(event){
		$('.czzx').css('display','block');
		$('.tab_c').css('background','white');
		$('.tab_c').css('color','black');
	});
	$('.czzx').mouseenter(function(event){
		$('.czzx').css('display','block');
		$('.tab_c').css('background','white');
		$('.tab_c').css('color','black');
	});
	$('.tab_c').mouseleave(function(event) {
		$('.czzx').css('display','none');
		$('.tab_c').css('background','#000');
		$('.tab_c').css('color','#999');
	});
	$('.czzx').mouseleave(function(event) {
		$('.czzx').css('display','none');
		$('.tab_c').css('background','#000');
		$('.tab_c').css('color','#999');
	});
	$('.tab_d').mouseenter(function(event){
		$('.khfw').css('display','block');
		$('.tab_d').css('background','white');
		$('.tab_d').css('color','black');
	});
	$('.khfw').mouseenter(function(event){
		$('.khfw').css('display','block');
		$('.tab_d').css('background','white');
		$('.tab_d').css('color','black');
	});
	$('.tab_d').mouseleave(function(event) {
		$('.khfw').css('display','none');
		$('.tab_d').css('background','#000');
		$('.tab_d').css('color','#999');
	});
	$('.khfw').mouseleave(function(event) {
		$('.khfw').css('display','none');
		$('.tab_d').css('background','#000');
		$('.tab_d').css('color','#999');
	});
	$('.tab_e').mouseenter(function(event){
		$('.grzx').css('display','block');
		$('.tab_e').css('background','white');
		$('.tab_e').css('color','black');
	});
	$('.grzx').mouseenter(function(event){
		$('.grzx').css('display','block');
		$('.tab_e').css('background','white');
		$('.tab_e').css('color','black');
	});
	$('.tab_e').mouseleave(function(event) {
		$('.grzx').css('display','none');
		$('.tab_e').css('background','#000');
		$('.tab_e').css('color','#999');
	});
	$('.grzx').mouseleave(function(event) {
		$('.grzx').css('display','none');
		$('.tab_e').css('background','#000');
		$('.tab_e').css('color','#999');
	});






















		/*限时购主页倒计时*/
		function countTime(){
    	var preTime=new Date(2019,7,16,17,30);
		setInterval(function(){	
		var nowTime=new Date();			
	

		var time=preTime-nowTime;


		var hours=parseInt((time%(24*60*60*1000))/(60*60*1000));

		var min=parseInt(((time%(24*60*60*1000))%(60*60*1000))/(60*1000));

		var sec=parseInt((((time%(24*60*60*1000))%(60*60*1000))%(60*1000))/1000);

		
		if(min<10&&sec<10){
			txt.innerText='0'+hours+':0'+min+':0'+sec;
		}else if(min<10){
			txt.innerText='0'+hours+':0'+min+':'+sec;
		}else if(sec<10){
			txt.innerText='0'+hours+':'+min+':0'+sec;
		}else{
			txt.innerText='0'+hours+':'+min+':'+sec;
		}
		

		},1000)
	}

	
	$('#timeClip li').click(function(event) {
		// $(this).css('border-bottom','3px solid');
		$(this).addClass('news');
		$(this).siblings().removeClass('news');
		

		var i=$(this).index();
		$('.goodslist').eq(i).addClass('dis');
		$('.goodslist').eq(i).siblings().removeClass('dis');
	});
	

	countTime();//限时购主页倒计时
	

	/*鼠标滚轮到一定距离，tab栏固定在顶部*/
	function fixed() {
	$(document).ready(function(){
	var navOffset = $(".m-nav").offset().top;//先得到据顶部的距离
	console.log(navOffset);
	$(window).scroll(function(){
	var scrollPos = $(window).scrollTop();//得到滚动的距离
	if(scrollPos>=navOffset){       //比较判断是否fixed
	$(".m-nav").addClass("screenfixed");
	}else{
	$(".m-nav").removeClass("screenfixed");
	}
	})
	})
	}
	fixed();

  })
          



