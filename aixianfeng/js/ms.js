$.ajax("../data/miaosha.json",{success:function(data){
		var ms= data.product;
		console.log(ms);
		$("#axfMb").load("../templete/mstmp.html",function(){
			var htmlStr = baidu.template("msTmp",{ms:ms});
			$(".ms_ym").html(htmlStr);
		  $(this).find("#msTmp").remove();
		});
}});