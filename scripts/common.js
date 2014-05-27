//此JS为各个页面公用的部分
$(function(){
	$(".s-mod-item").each(function(){
		var i=$(this);
		var wrap=i.find(".s-mod-wrap");
		var def=i.find(".s-mod-def");
		var cur=i.find(".s-mod-cur");
		
		//滑动效果
		i.hover(function(){
			def.stop().animate({top:-60},600,"easeOutBounce")
			cur.stop().animate({top:-60},600,"easeOutBounce")
		},function(){
			def.stop().animate({top:0},600,"easeOutBounce")
			cur.stop().animate({top:0},600,"easeOutBounce")
		})
	})
})