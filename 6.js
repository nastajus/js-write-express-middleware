//inspired by this https://www.youtube.com/watch?v=JEq7Ehw-qk8

function add (first, second, callback) {
	console.log(first+second);
	
	if (typeof(callback) === "function"){
		callback();
	}
	else {
		console.log('not a function');
	}
}

add(2,3, function(){
	console.log('done');
});

add(4,5);

//TypeError: Cannot set property 'newproperty' of undefined
// add(6,7, function(foobar){
// 	foobar.newproperty = "rainbows";
// });



//typeof function test?
//https://stackoverflow.com/questions/5999998/how-can-i-check-if-a-javascript-variable-is-function-type
//With updated performance tests it looks like there's a huge speed difference depending on your browser. In Chrome typeof(obj) === 'function' appears to be the fastest by far; however, in Firefox obj instanceof Function is the clear winner