/*
* @Author: xujiaming
* @Date:   2019-08-13 13:49:05
* @Last Modified by:   hp
* @Last Modified time: 2019-08-14 14:02:00
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

	$(window).scroll(function(e) {
			// console.log(e);
			console.log($(this).scrollTop());
			
			// 对象.scrollTop()  获取滚动条距离页面顶部的距离
			
			if($(this).scrollTop()>296){
			 	
			 	$('.clearFix').css('position', 'fixed');
			 	$('.clearFix').css('top', '69px');						
			}else{
				
			 	$('.clearFix').css('position', 'absolute');
			 	$('.clearFix').css('top', '294px')	
			}

	});
	$('.clearFixFour').click(function(event) {
			// 事件源：body,html
			// scrollTop滚动条距离页面顶部的距离，scrollTop在css中没有，是animate中特有的
			$('body,html').animate({
				// 带有动画回到顶部
				'scrollTop':'0px'
			}, 1000)
	});



});