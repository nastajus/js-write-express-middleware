/*
stewart, frakes, dorn, spiner, burton, wheaton, crosby, sirtis, meaney
*/

function stewart(anything) {
	anything.howdoiaddparameters = {};
}

let request = {};

console.log (request);

stewart( (request)=>{} );

//console.log ( stewart(request) ); // >undefined because that's what stewart returns, nadda.

// console.log ( (request)=>{} );  //  >[Function] // okay makes sense, never executed.


//i suppose i am ... trying to modify the properties of a variable from inside the inner scope of a function's implementation body (...) vague.
// time to look at raw source code bothering me and draw direct comparisons.


/*
//draft 1

function stewart() {}

let request = {};

function frakes(request) {}

stewart( (request)=>{} );
*/