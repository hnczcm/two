/*
* @Author: hp
* @Date:   2019-08-03 16:30:10
* @Last Modified by:   hp
* @Last Modified time: 2019-08-13 18:59:21
*/

$(function(){
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


	$('.showImg').mouseenter(function(event){
		$('.buttonContain .left').css('display','block');
		$('.buttonContain .right').css('display','block');
	});
	$('.showImg').mouseleave(function(event) {
		$('.buttonContain .left').css('display','none');
		$('.buttonContain .right').css('display','none');
	});

	$('.tab_01').mouseenter(function(event){
		$('.LunBobox1').css('display','block');
	});
	$('.tab_01').mouseleave(function(event) {
		$('.LunBobox1').css('display','none');
	});
	$('.LunBobox1').mouseenter(function(event){
		$('.LunBobox1').css('display','block');
	});
	$('.LunBobox1').mouseleave(function(event) {
		$('.LunBobox1').css('display','none');
	});

	$('.tab_02').mouseenter(function(event){
		$('.LunBobox2').css('display','block');
	});
	$('.tab_02').mouseleave(function(event) {
		$('.LunBobox2').css('display','none');
	});
	$('.LunBobox2').mouseenter(function(event){
		$('.LunBobox2').css('display','block');
	});
	$('.LunBobox2').mouseleave(function(event) {
		$('.LunBobox2').css('display','none');
	});

	$('.tab_03').mouseenter(function(event){
		$('.LunBobox3').css('display','block');
	});
	$('.tab_03').mouseleave(function(event) {
		$('.LunBobox3').css('display','none');
	});
	$('.LunBobox3').mouseenter(function(event){
		$('.LunBobox3').css('display','block');
	});
	$('.LunBobox3').mouseleave(function(event) {
		$('.LunBobox3').css('display','none');
	});

	$('.tab_04').mouseenter(function(event){
		$('.LunBobox4').css('display','block');
	});
	$('.tab_04').mouseleave(function(event) {
		$('.LunBobox4').css('display','none');
	});
	$('.LunBobox4').mouseenter(function(event){
		$('.LunBobox4').css('display','block');
	});
	$('.LunBobox4').mouseleave(function(event) {
		$('.LunBobox4').css('display','none');
	});

	$('.tab_05').mouseenter(function(event){
		$('.LunBobox5').css('display','block');
	});
	$('.tab_05').mouseleave(function(event) {
		$('.LunBobox5').css('display','none');
	});
	$('.LunBobox5').mouseenter(function(event){
		$('.LunBobox5').css('display','block');
	});
	$('.LunBobox5').mouseleave(function(event) {
		$('.LunBobox5').css('display','none');
	});

	$('.tab_06').mouseenter(function(event){
		$('.LunBobox6').css('display','block');
	});
	$('.tab_06').mouseleave(function(event) {
		$('.LunBobox6').css('display','none');
	});
	$('.LunBobox6').mouseenter(function(event){
		$('.LunBobox6').css('display','block');
	});
	$('.LunBobox6').mouseleave(function(event) {
		$('.LunBobox6').css('display','none');
	});

	$('.tab_07').mouseenter(function(event){
		$('.LunBobox7').css('display','block');
	});
	$('.tab_07').mouseleave(function(event) {
		$('.LunBobox7').css('display','none');
	});
	$('.LunBobox7').mouseenter(function(event){
		$('.LunBobox7').css('display','block');
	});
	$('.LunBobox7').mouseleave(function(event) {
		$('.LunBobox7').css('display','none');
	});

	$('.tab_08').mouseenter(function(event){
		$('.LunBobox8').css('display','block');
	});
	$('.tab_08').mouseleave(function(event) {
		$('.LunBobox8').css('display','none');
	});
	$('.LunBobox8').mouseenter(function(event){
		$('.LunBobox8').css('display','block');
	});
	$('.LunBobox8').mouseleave(function(event) {
		$('.LunBobox8').css('display','none');
	});

	$('.tab_09').mouseenter(function(event){
		$('.LunBobox9').css('display','block');
	});
	$('.tab_09').mouseleave(function(event) {
		$('.LunBobox9').css('display','none');
	});
	$('.LunBobox9').mouseenter(function(event){
		$('.LunBobox9').css('display','block');
	});
	$('.LunBobox9').mouseleave(function(event) {
		$('.LunBobox9').css('display','none');
	});

	$('.tab_10').mouseenter(function(event){
		$('.LunBobox10').css('display','block');
	});
	$('.tab_10').mouseleave(function(event) {
		$('.LunBobox10').css('display','none');
	});
	$('.LunBobox10').mouseenter(function(event){
		$('.LunBobox10').css('display','block');
	});
	$('.LunBobox10').mouseleave(function(event) {
		$('.LunBobox10').css('display','none');
	});

	$('.tab_11').mouseenter(function(event){
		$('.LunBobox11').css('display','block');
	});
	$('.tab_11').mouseleave(function(event) {
		$('.LunBobox11').css('display','none');
	});
	$('.LunBobox11').mouseenter(function(event){
		$('.LunBobox11').css('display','block');
	});
	$('.LunBobox11').mouseleave(function(event) {
		$('.LunBobox11').css('display','none');
	});


	var i=0;
	var timer;
	function time(){
		timer=setInterval(function(){
		
		
			$('.showImg img').css('opacity', '0');
			$('.showImg img').eq(i+1).css('opacity', '1');
			$('.showImg .buttonContain ul li').css('background', 'white');
			$('.showImg .buttonContain ul li').eq(0).css('background', '#ff1e32');
			console.log(11);
			// if(i==3){
			// 	$('.showImg .buttonContain ul li').eq(0).css('background', '#ff1e32');
			// }else{
			// 	$('.showImg .buttonContain ul li').eq(i+1).css('background', '#ff1e32');
			// }
			
			i++;
			
			
			if(i>3){
				i=0;
			}
		}
		,2500)
	}
	time();
	document.getElementById('showImg').onmouseleave=function(){
    		time();

    }
    document.getElementById('showImg').onmouseenter=function(){
    		clearInterval(timer);
    			
    }
    $('.showImg .left').click(function(event) {
    	
    	$('.showImg img').css('opacity', '0');
		$('.showImg img').eq(i).css('opacity', '1');
		$('.showImg .buttonContain ul li').css('background', 'white');
		$('.showImg .buttonContain ul li').eq(i).css('background', '#ff1e32');
		i--;
		if(i<0){
				i=3;
			}
	});
    $('.showImg .right').click(function(event) {
    	
    	$('.showImg img').css('opacity', '0');
		$('.showImg img').eq(i).css('opacity', '1');
		$('.showImg .buttonContain ul li').css('background', 'white');
		$('.showImg .buttonContain ul li').eq(i).css('background', '#ff1e32');
		i++;
		if(i>3){
				i=0;
			}
	});

	$('.dotOne').mouseenter(function(event) {
		i=0;
		$('.showImg img').css('opacity', '0');
		$('.showImg img').eq(i).css('opacity', '1');
		$('.showImg .buttonContain ul li').css('background', 'white');
		$('.showImg .buttonContain ul li').eq(i).css('background', '#ff1e32');
		console.log('鼠标移入了0');		
	 });
	$('.dotTwo').mouseenter(function(event) {
		i=1;
		$('.showImg img').css('opacity', '0');
		$('.showImg img').eq(i).css('opacity', '1');
		$('.showImg .buttonContain ul li').css('background', 'white');
		$('.showImg .buttonContain ul li').eq(i).css('background', '#ff1e32');
		console.log('鼠标移入了1');		
	 });
	$('.dotThree').mouseenter(function(event) {
		i=2;
		$('.showImg img').css('opacity', '0');
		$('.showImg img').eq(i).css('opacity', '1');
		$('.showImg .buttonContain ul li').css('background', 'white');
		$('.showImg .buttonContain ul li').eq(i).css('background', '#ff1e32');
		console.log('鼠标移入了2');		
	 });
	$('.dotFour').mouseenter(function(event) {
		i=3;
		$('.showImg img').css('opacity', '0');
		$('.showImg img').eq(i).css('opacity', '1');
		$('.showImg .buttonContain ul li').css('background', 'white');
		$('.showImg .buttonContain ul li').eq(i).css('background', '#ff1e32');
		console.log('鼠标移入了3');		
	 });




	$(window).scroll(function(e) {
			// console.log(e);
			console.log($(this).scrollTop());
			
			// 对象.scrollTop()  获取滚动条距离页面顶部的距离
			if($(this).scrollTop()>146){
			 	$('.moveHeader').css('display', 'block');					
			}else{
				$('.moveHeader').css('display', 'none');
			}
			if($(this).scrollTop()>710){
			 	$('.clearFixLeft').css('position', 'fixed');
			 	$('.clearFixLeft').css('top', '69px');
			 	$('.clearFix').css('position', 'fixed');
			 	$('.clearFix').css('top', '69px');						
			}else{
				$('.clearFixLeft').css('position', 'absolute');
			 	$('.clearFixLeft').css('top', '779px');
			 	$('.clearFix').css('position', 'absolute');
			 	$('.clearFix').css('top', '779px')	
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



})