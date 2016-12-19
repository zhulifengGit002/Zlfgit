function shopCar(){
	//首页动画购物特效
	$(".sy_ms4_add").on("click",function(e){
		var img=$(this).parents(".main4_3_li").children(".m4_3_img").clone();
		img.css("width","1rem");
		$(this).parents(".main4_3_li").children(".m4_3_img").append(img);
		var x = (e.clientX)/100-1.0+"rem",y=(e.clientY)/100-2.0+"rem";
			img.css({
				"position":"fixed",
				"left":x,
				"top":y,
				"border-radius":"50%",
				"animation":"rotate 1s"
			});
			var t = setTimeout(function(){
				img.remove();
			},1000);
			$(".footer_num").css("display","block");
			var num=$(".footer_num");
			var n=parseInt(num.html());
			n++;
			num.html(n)
	});
	//footer变色
	$(".footer").on("click","li",function(){
		var li=$(this);
		var num=li.index()+1;
		li.parent().children("li").css({
				"background":"",
				"background-size": ""
		});
		li.css({
				"background":"url(../images/nav1"+num+".png) no-repeat 50% 0.08rem",
				"background-size": "auto .3rem"
		});
	});
	//模板数据--请求
	$.ajax("../data/homeData.json",{success:function(data){
		//获得首页banner和菜单
		var sy= data.data.act_info;
		console.log(sy)
		$("#axfMb").load("../templete/sytmp.html",function(){
			var htmlStr = baidu.template("syTmp",{sy:sy});
			$(".sy_ym").html(htmlStr);
			var mySwiper = new Swiper ('.swiper-container', {
		    loop: true,	
		    autoplay:3000,
		    autoplayDisableOnInteraction : false,
		    pagination: '.swiper-pagination',
		    paginationClickable :true
		  });
		  $(this).find("#syTmp").remove();//删除，模板*/
		});
	}});
}
shopCar();

