define(["text!./cs.html","css!./cs.css"], function(csPage){
	return{
		init:function(){
			if($(".cs").children().size()>0){
				$(".cs").show().siblings("div").hide();
			}else{
				$(".cs").show().siblings("div").hide();
				$(function(){
					//ajax请求菜单
					$.get("data/getCate.json",{},callBack1);					
				});
			}
		}
	}
});
function callBack1(data){
		var cs= data.data;
		var b="103541";
		var csList=data.data.products[b];
		$("#axfMb").load("templete/cstmp.html",function(){
			var htmlStr = baidu.template("csTmp",{"cs":cs,"csList":csList});
			$(".cs").html(htmlStr);
			// 右侧数据模板
			rightList(b,cs);
			addClick();
			remove();
		  	$(this).find("#csTmp").remove();
	});
}
function addClick(){
		$(".cs_add").on("click",function(e){
		var img=$(this).parents("li").children(".img").clone();
		$(this).parents("li").children(".img").append(img);
		var x = (e.clientX)/100-2.8+"rem",y=(e.clientY)/100-0.5+"rem";
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
			//添加或存储数据
			var num=$(this).parent().find(".cs_num");
			num.css("display","block");
			var num1=parseInt(num.text());
			num1++;
			num.html(num1);
			var shujuZ=JSON.parse(localStorage.getItem("shuju"));
			$(this).parent().find(".cs_jian").css("display","block");
			var backImg=$(this).parents("li").find(".img").css("background-image");
			var	name=$(this).parents("li").find(".cs_co_name").text();
			var good=$(this).parents("li").find(".cs_co_goods").text();
			var shuju={"backImg":backImg,"name":name,"good":good};
			var shujuZ=JSON.parse(localStorage.getItem("shuju"))||[];
			shujuZ.push(shuju);
			localStorage.shuju=JSON.stringify(shujuZ);
	});
}
// 数据的删除
function remove(){
	$(".cs_jian").on("click",function(e){
		var num=$(this).parent().find(".cs_num");
		var tName=$(this).parents(".content").find(".cs_co_name").html();
		var num1=parseInt(num.text());
			num1--;
			num.html(num1);
		if(num1==0){
			$(this).parent().find(".cs_jian").css("display","none");
			num.css("display","none");
		}
		var shujuZ=JSON.parse(localStorage.getItem("shuju"));
		for(var i=0;i<shujuZ.length;i++){
			if(shujuZ[i].name==tName){
				shujuZ.splice(i,1);
				localStorage.shuju=JSON.stringify(shujuZ);			
				return;
			}
		}
	});
}
function rightList(b,cs){
	$(".mleft ul").on("click","li",function(){
		$(this).parents().find("p").css("border-left","none");
		$(this).children().css("border-left","6px solid #ffd600");
		$(this).get();
		b=$(this).get()[0].id;
		// list模板-----s缺少删选是否加载过代码
		var csList=cs.products[b];
		$("#axfMb").load("templete/csRtmp.html",function(){
			var htmlStr = baidu.template("csrTmp",{"csList":csList});
			$("#mright").html(htmlStr);
			addClick();
			$(this).find("#csrTmp").remove();
		});
	});
}
