define(["text!./wode.html","css!./wode.css"], function(wodePage){
	return{
		init:function(){
			$(".wode").html(wodePage).show().siblings("div").hide();
		}
	}
});

