require.config({
	paths:{
		"jquery":"./js/jquery-1.11.2",
		"Backbone": "./js/backbone",
		"text": "./js/text",
		"underscore": "./js/underscore",
		"css": "./js/css",
		"router":"./js/router",
		"baiduTemplate":"./js/baiduTemplate",
		"swiper":"./js/swiper-3.4.0.jquery.min",
		"lazy":"./js/jquery.lazyload.min"
	},
	shim:{
		"swiper":{
			deps:["jquery"]
		},
		"lazy":{
			deps:["jquery"]
		}
	}
});
require(['jquery','Backbone','router',"baiduTemplate","swiper"],function($,Backbone){
    Backbone.history.start();
});

