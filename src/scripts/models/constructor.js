function Car(...alt){
	this.car_name = alt[0];
	this.car_reg = alt[1];
	this.car_type = alt[2];
	 this.start = function(){	
		console.log('STARTING VEHICLE ...',alt);	
	};
	this.colour = function(){
		if(this.car_reg === 2018){
			console.log(['blue','red','green']);
		}else{
			console.log('black');
		};
	};
};
let vehicleA = new Car('Mercedes',2018,'Automatic');
let vehicleB = new Car('Citroen',2016,'Manual');

vehicleA.colour();
vehicleB.start();