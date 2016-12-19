define(["text!./sy.html","$css!./sy.css"], function(syPage){
	return{
		init:function(){
			$(".sy").html(syPage);
		}
	}
});

