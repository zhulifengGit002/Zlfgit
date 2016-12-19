define(["text!./car.html","css!./car.css"], function(carPage){
	return{
		init:function(){
				$(".car").show().siblings("div").hide();
				carMb();
		}
	}
});
function carMb(){
	var numJson=[];
	// 封装一个去重的函数
	Array.prototype.unique3=function () {
			var res=[];
			var json={};
			for(var i=0,len=this.length;i<len;i++){
				if(!json[this[i]["name"]]){
					res.push(this[i]);
					json[this[i]["name"]]=1
				}else{
					json[this[i]["name"]]++;
				}
			}
			for(i in json){
				var num=json[i];
				numJson.push(num);
			}
			return res;
	}
	// 数据的获取
	var shujuZ=JSON.parse(localStorage.getItem("shuju"))||[];
	//使用封装的函数去除重复的数据
	var allShuju=shujuZ.unique3()||0;
	// 判断数据是否存在不存在显示购物车空的页面
	if (allShuju.length>=0){
		$("#axfMb").load("templete/cartmp.html",function(){
				var htmlStr= baidu.template("carTmp",{shujuZ:allShuju,numJson:numJson});
				$(".car").html(htmlStr);
				$("#carTmp").remove();
		});		
	}
}



