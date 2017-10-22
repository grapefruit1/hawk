window.onload = customOnload;

function customOnload() {
	console.log(arguments,this);
	var HawkInstance = HAWKJSFactory.factory();
	HawkInstance.run();
}

var HAWKJSFactory = {factory:function(){
	var HAWKJS = {};
	HAWKJS.stats = {};
	HAWKJS.stats.frameCount = 0;
	HAWKJS.version = 0.1;
	HAWKJS.desiredFPS = 60;
	HAWKJS.run = function(){
		this.intervalID = setInterval(this.update, 1000 / this.desiredFPS);
		console.log(arguments,this);
	};
	HAWKJS.update = function(){
		//console.log(arguments,this);
		console.log("update run");
		//this.stats.frameCount++;
		clearInterval(this.intervalID);
	};
	return HAWKJS;
}};
