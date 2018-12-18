import {Init} from '../init.js';

let init  = new Init();
let styles = init.Styles();

let style_title = styles.style_title;
let style_info = styles.style_info;
let style_subtitle = styles.style_subtitle;

class Car{
	constructor(id = 0){
		this.newID = id;
	}
	identify(suffix = '?'){
		return `IDENTIFY THIS ${this.newID}${suffix}`;
	}
}

class Gear extends Car{
	constructor(){
		super();
	};
	identify(){
		return 'THIS IS IDENTIFIED AS GEAR' ;
	};
}
console.info('%cCREATE OBJECT OF CLASS',style_title);
let vehicle = new Car(123);

console.log(vehicle.newID);

console.info('%cCHANGE VALUE IN CLASS',style_title);
vehicle.newID = 456;

console.log(vehicle.newID);

console.info('%cCALL A METHOD WITHIN CLASS',style_title);
console.log(vehicle.identify());

console.info('%cPASS A VALUE TO A METHOD',style_title);
console.log(vehicle.identify('!!!!'));

console.info('%cACCESSING A METHOD WITH THE SAME NAME IN AN INHERITED CLASS WILL USE THE INHERITED CLASSES METHOD',style_title);
let car  = new Gear();
console.log(car.identify());