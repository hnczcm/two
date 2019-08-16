/*
* @Author: hp
* @Date:   2019-08-08 16:25:01
* @Last Modified by:   hp
* @Last Modified time: 2019-08-08 16:42:37
*/

$(function(){
	$('.lb2').click(function(event) {
		$('.inputbox').css('display', 'none');
		$('.inputbox1').css('display', 'block');
		$('.yanZheng').css('display', 'none');
		$('.lb1').css('color', '#333333');
		$('.lb2').css('color', '#E31436');
	});
	$('.lb1').click(function(event) {
		$('.inputbox').css('display', 'block');
		$('.inputbox1').css('display', 'none');
		$('.yanZheng').css('display', 'block');
		$('.lb1').css('color', '#E31436');
		$('.lb2').css('color', '#333333');
	});
})