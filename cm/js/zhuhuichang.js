/*
* @Author: hp
* @Date:   2019-08-14 16:50:07
* @Last Modified by:   hp
* @Last Modified time: 2019-08-16 10:28:09
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
			
			if($(this).scrollTop()>1797){
			 	
			 	$('.clearsllow').css('display', 'block');
			 							
			}else{
				$('.clearsllow').css('display', 'none');	
			}

	});
	$('.a002').click(function(event) {
			// 事件源：body,html
			// scrollTop滚动条距离页面顶部的距离，scrollTop在css中没有，是animate中特有的
			$('body,html').animate({
				// 带有动画回到顶部
				'scrollTop':'1830px'
			}, 1000)
	});
	$('.a003').click(function(event) {
			// 事件源：body,html
			// scrollTop滚动条距离页面顶部的距离，scrollTop在css中没有，是animate中特有的
			$('body,html').animate({
				// 带有动画回到顶部
				'scrollTop':'2730px'
			}, 1000)
	});
	$('.a004').click(function(event) {
			// 事件源：body,html
			// scrollTop滚动条距离页面顶部的距离，scrollTop在css中没有，是animate中特有的
			$('body,html').animate({
				// 带有动画回到顶部
				'scrollTop':'3110px'
			}, 1000)
	});
	$('.a005').click(function(event) {
			// 事件源：body,html
			// scrollTop滚动条距离页面顶部的距离，scrollTop在css中没有，是animate中特有的
			$('body,html').animate({
				// 带有动画回到顶部s
				'scrollTop':'3490px'
			}, 1000)
	});
	$('.a006').click(function(event) {
			// 事件源：body,html
			// scrollTop滚动条距离页面顶部的距离，scrollTop在css中没有，是animate中特有的
			$('body,html').animate({
				// 带有动画回到顶部
				'scrollTop':'3865x'
			}, 1000)
	});
	$('.a007').click(function(event) {
			// 事件源：body,html
			// scrollTop滚动条距离页面顶部的距离，scrollTop在css中没有，是animate中特有的
			$('body,html').animate({
				// 带有动画回到顶部
				'scrollTop':'4240px'
			}, 1000)
	});
	$('.a008').click(function(event) {
			// 事件源：body,html
			// scrollTop滚动条距离页面顶部的距离，scrollTop在css中没有，是animate中特有的
			$('body,html').animate({
				// 带有动画回到顶部
				'scrollTop':'4615px'
			}, 1000)
	});
	$('.a009').click(function(event) {
			// 事件源：body,html
			// scrollTop滚动条距离页面顶部的距离，scrollTop在css中没有，是animate中特有的
			$('body,html').animate({
				// 带有动画回到顶部
				'scrollTop':'4990px'
			}, 1000)
	});
	$('.a010').click(function(event) {
			// 事件源：body,html
			// scrollTop滚动条距离页面顶部的距离，scrollTop在css中没有，是animate中特有的
			$('body,html').animate({
				// 带有动画回到顶部
				'scrollTop':'5365px'
			}, 1000)
	});
	$('.a011').click(function(event) {
			// 事件源：body,html
			// scrollTop滚动条距离页面顶部的距离，scrollTop在css中没有，是animate中特有的
			$('body,html').animate({
				// 带有动画回到顶部
				'scrollTop':'5730px'
			}, 1000)
	});
	$('.a012').click(function(event) {
			// 事件源：body,html
			// scrollTop滚动条距离页面顶部的距离，scrollTop在css中没有，是animate中特有的
			$('body,html').animate({
				// 带有动画回到顶部
				'scrollTop':'6115px'
			}, 1000)
	});
	$('.a013').click(function(event) {
			// 事件源：body,html
			// scrollTop滚动条距离页面顶部的距离，scrollTop在css中没有，是animate中特有的
			$('body,html').animate({
				// 带有动画回到顶部
				'scrollTop':'6480px'
			}, 1000)
	});
	$('.a014').click(function(event) {
			// 事件源：body,html
			// scrollTop滚动条距离页面顶部的距离，scrollTop在css中没有，是animate中特有的
			$('body,html').animate({
				// 带有动画回到顶部
				'scrollTop':'6850px'
			}, 1000)
	});
	$('.a015').click(function(event) {
			// 事件源：body,html
			// scrollTop滚动条距离页面顶部的距离，scrollTop在css中没有，是animate中特有的
			$('body,html').animate({
				// 带有动画回到顶部
				'scrollTop':'7180px'
			}, 1000)
	});








});