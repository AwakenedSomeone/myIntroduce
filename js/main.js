$(function(){
	var $prev=$('#prev');
	var $next=$('#next');
	
	
	$prev.click(function(){
		var $items=$('.introduce');
		var len=$items.length;
		var index=0;
		for(var i=0;i<len;i++) {
			if($items.eq(i).attr('class').indexOf('active')!==-1)
			{
				index=i;
			}
		}
		$items.eq(index).removeClass('active');
		index--;
		if(index<0){
			index=len-1;
		}
		$items.eq(index).addClass('active');
	});
	$next.click(function(){
		var $items=$('.introduce');
		var len=$items.length;
		var index=0;
		for(var i=0;i<len;i++) {
			if($items.eq(i).attr('class').indexOf('active')!==-1)
			{
				index=i;
			}
		}
		$items.eq(index).removeClass('active');
		index++;
		if(index==len){
			index=0;
		}
		$items.eq(index).addClass('active');
	})

var mq = window.matchMedia('(max-width: 360px)');
if(mq.matches) {
	console.log("0");
    $('.show').find('img').eq(0).attr('src','images/sell.png');
    $('.show').find('img').eq(1).attr('src','images/sell6.png');
} 
})