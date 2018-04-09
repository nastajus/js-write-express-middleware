//deeper example here by techsith: https://www.youtube.com/watch?v=pTbSfCT42_M

let add = function(a,b) {
	return a+b;
};

let multiply = function(a,b){
	return a*b;
};

let calc = function (num1, num2, callback){
	return callback(num1, num2);
};

console.log(calc(2,3, add));

// let calcInline = function (num1, num2, ()=>{} ){
// 	return arguments[2](num1, num2);
// };
//i *somewhat* accept this doesn't make sense, since defining inline instead of passing a variable of a function.

console.log(calc (2,3, function(a,b){return a-b;}));

//https://www.youtube.com/watch?v=Nau-iEEgEoM
//Understanding JavaScript Callbacks
//All Things JavaScript, LLC
//2017
//supports higher order functions


//https://www.youtube.com/watch?v=qN0dkXj7jc0
//Mastering JavaScript Callbacks
//Kyle Robinson Young
//2015


//https://en.wikipedia.org/wiki/Higher-order_function#JavaScript
const twice = (f, v) => f(f(v));
const add3 = v => v + 3;
console.log(twice(add3, 7)); // 13