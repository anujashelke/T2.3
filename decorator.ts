
function MyMethodDecorator(target){
	target.prototype.used='Typescript';
	console.log(target);
}


@MyMethodDecorator
class method{

	used: String;
}

var t = new method();
console.log(`method is ${t.used}`);

@MyStaticMethodDecorator
class Staticmethod{

	state: String;
}


function MyStaticMethodDecorator(target){
	target.prototype.state='Static';
	console.log(target);
}

var s = new Staticmethod();
console.log(`state is${s.state}`);