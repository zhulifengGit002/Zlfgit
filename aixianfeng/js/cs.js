$.ajax("../data/getCate.json",{success:function(data){
		var cs= data.data;
		var b="103541";
		var csList=data.data.products[b];
		console.log(csList)
		$("#axfMb").load("../templete/cstmp.html",function(){
			var htmlStr = baidu.template("csTmp",{"cs":cs,"csList":csList});
			$(".cs_ym").html(htmlStr);
			left(b,cs,csList);
			addClick();
		  $(this).find("#csTmp").remove();
		});
}});
function left(b,cs,csList){
	$(".mleft ul").on("click","li",function(){
		$(this).parents().find("p").css("border-left","none");
		$(this).children().css("border-left","6px solid #ffd600");
		$(this).get();
		b=$(this).get()[0].id;
	});
}
function addClick(){
	$(".add").on("click",function(e){
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
});
}
