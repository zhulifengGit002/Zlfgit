define(["Backbone"], function(Backbone){
	var Router = Backbone.Router.extend({
		routes:{
			"":"sy",
			sy: "sy",
			cs: "cs",
			car: "car",
			wode: "wode"
		},
		sy: function(){
			require(["./modules/sy/sy.js"],function(sy){
				sy.init();
			});
		},
		cs: function(){
			require(["./modules/cs/cs.js"],function(cs){
				cs.init();
			});
		},
		car: function(){
			require(["./modules/car/car.js"],function(car){
				car.init();
			});
		},
		wode: function(){
			require(["./modules/wode/wode.js"],function(wode){
				wode.init();
			});
		}
	});
	return new Router();
});
