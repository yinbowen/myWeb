//此JS为各个页面公用的部分
$(function(){
	$(".s-mod-item").each(function(){
		var i=$(this);
		var wrap=i.find(".s-mod-wrap");
		var def=i.find(".s-mod-def");
		var cur=i.find(".s-mod-cur");
		
		//导航栏滑动效果
		i.hover(function(){
			def.stop().animate({top:-60},600,"easeOutBounce")
			cur.stop().animate({top:-60},600,"easeOutBounce")
		},function(){
			def.stop().animate({top:0},600,"easeOutBounce")
			cur.stop().animate({top:0},600,"easeOutBounce")
		})
	})

	 //回到顶部部分
	 //首先将#goTopDiv隐藏 
    $("#goTopDiv").hide()
    .css('opacity', '0.7');
    
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#goTopDiv").fadeIn(600);    
        } else {         
            $("#goTopDiv").fadeOut(600);
        }
    });
   
    //当点击跳转链接后，回到页面顶部位置
    $("#goTopDiv").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 400);
        return false;
    })
    
})

