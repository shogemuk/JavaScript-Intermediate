// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
import {Init} from '../init.js';

let init = new Init();
let styles = init.Styles();

let style_title = styles.style_title;
let style_info = styles.style_info;
let style_subtitle = styles.style_subtitle;

let params = [
	{name:'Mercedes',year:2018,type:'Manual'},
	{name:'Tesla',year:2017,type:'Automatic'},
	{name:'Citroen',year:2016,type:'Manual'},
	{name:'Tesla',year:2018,type:'Automatic'}
];

console.info('%cGET LENGTH',style_title);
console.info('%cLENGTH',style_subtitle,params.length);

console.info('%cPASS ONE PARAMETERS',style_title);
console.info('%cFOREACH',style_subtitle);
params.forEach(item => console.log(item));

console.info('%cFOREACH AND GET INDEX',style_title);
console.info('%cPASS MULTIPLE PARAMETERS',style_subtitle);
params.forEach((item,index)=>console.log(item,index));

console.info('%cFILTER',style_title);
console.info('%cFILTER MANUAL CARS FROM ARRAY',style_subtitle);
let manualCars = params.filter(car=>(car.type === 'Manual'));
console.log(manualCars);

console.info('%cEVERY',style_title);
console.info('%cCHECK THAT ALL CARS ARE MADE BEFORE 2015',style_subtitle);
let newCars = params.every(car=>car.year > 2015);
console.log(newCars);

console.info('%cFIND',style_title);
console.info('%cFIND THE FIRST CAR THAT IS A TESLA',style_subtitle);
let findTesla = params.find(car=>car.name === 'Tesla');
console.log(findTesla);

