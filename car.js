(function(mycar){
	
	/*function Car(make, model, color){
		this.make = make;
		this.model = model;
		this.color = color;
	}*/
	
	/*Car.prototype.startEngine = function(){
		document.write("Engine Started");
	}*/
	
	/*function getdesc(a){
		return a.make + " " + a.model;
	}*/
	
	function Car(make, model, color){
		var _make = make;
		var _model = model;
		var _color = color;
		
		this.getMake = function(){
			return _make;
		}
		this.getModel = function(){
			return _model;
		}
	}
	function getdesc(a){
		return a.getMake() + " " + a.getModel();
	}
	
	Car.prototype.startEngine = function(){
		document.write(getdesc(this) + " Engine Started");
	}
	
	Car.wheelNum = 4;
	Car.prototype.mile = 40;
	
	mycar.Car = Car;
	
}(window));