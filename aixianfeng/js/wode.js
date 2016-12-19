$.ajax("../data/getCate.json",{success:function(data){
		var cs= data.data;
		$("#axfMb").load("../templete/cstmp.html",function(){
			var htmlStr = baidu.template("csTmp",{cs:cs});
			$(".cs_ym").html(htmlStr);
			left();
			
			addClick();
		  $(this).find("#csTmp").remove();//删除，模板*/
		});
}});