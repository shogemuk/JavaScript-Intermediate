function JsonThis(json){
	this.stringify = function(){
		this.string = JSON.stringify(json);
		console.log(this.string);
	};
	this.parse = function(){
		this.par = JSON.parse(json);
		console.log(this.par);
	};
};

let params = [
	{name:'Mercedes',year:2018,type:'Manual'},
	{name:'Citroen',year:2016,type:'Manual'},
	{name:'Tesla',year:2018,type:'Automatic'}
];

let str_params = JSON.stringify(params);

let me = new JsonThis(params);
let you = new JsonThis(str_params);

me.stringify();
you.parse();