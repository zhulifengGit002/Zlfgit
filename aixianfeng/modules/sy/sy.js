define(["text!./sy.html","css!./sy.css"], function(syPage){
	return{
		init:function(){
			if($(".sy").children().size()>0){
				$(".sy").show().siblings("div").hide();
			}else{
				$(".sy").show().siblings("div").hide();
				$(function(){
						//ajax请求菜单
						$.get("data/homeData.json",{},callBack);					
				});
			}
		}
	}
});
function callBack(data){
	var sy= data.data.act_info;
		$("#axfMb").load("templete/sytmp.html",function(){
			var htmlStr = baidu.template("syTmp",{sy:sy});
			$(".sy").html(htmlStr);
			// var mySwiper = new Swiper ('.swiper-container', {
			//     loop: true,	
			//     autoplay:3000,
			//     autoplayDisab leOnInteraction : false,
			//     pagination: '.swiper-pagination',
			//     paginationClickable :true
		 //  	});
		  	donghua();
		 	$("#syTmp").remove();//删除，模板*/
	});
}
//首页动画购物特效
function donghua(){
	$(".sy_ms4_add").on("click",function(e){
		var img=$(this).parents(".sy_main4_3_li").children(".sy_m4_3_img").clone();
		$(this).parents(".sy_main4_3_li").children(".sy_m4_3_img").append(img);
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
			// 底部购物车数据的展示
			$(".footer_num").css("display","block");
			var num=$(".footer_num"),n=parseInt(num.html());
			n++;
			num.html(n);
			//添加或存储数据
			var arr=[];
			var shujuZ=JSON.parse(localStorage.getItem("shuju"))
			,backImg=$(this).parents("li").children(".sy_m4_3_img").css("background-image")
			,name=$(this).parents("li").find(".sy_m4_3_name").text()
			,good=$(this).parents("li").find(".sy_m4_3_goods").text()
			,shuju={"backImg":backImg,"name":name,"good":good}
			arr=shujuZ;
			arr.push(shuju);
			localStorage.shuju=JSON.stringify(arr);
	});
}
