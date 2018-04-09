function foo(lorem, ipsum, dolor) {
	console.log("fool");
	console.log(arguments[0]);
}

function bar(qux) {
	qux();
	console.log('---');
}

let req = {};
//bar(foo(req)); // <-- NOT good syntax, calling foo here isn't desired.
bar(function(req){}); // <-- IS good syntax, merely DEFINES but DOESN'T TRIGGER (CALL) here.


//bar(foo); //is this equivalent to express-like behavior i'm trying to isolate? it *might have* the 'raw ingredients' (one fn with 3 params, one fn "receiving" another fn) and I definitely need to verify it is in the right order.

//app.use('/', middleware, middleware, ...) <-- ... this? no... i'm conflating analyses again.

//app.use('/', (req, res, next) => {} ) <-- this!
	//use      == outer function, or the first-called function i might say
	//(..)=>{} == inner function, or the second-called function..

//bar(foo) ==
//use( ()=>{} )

//ok so. my goal now is to reproduce passing in the request parameter like in express but in vanilla javascript and mutate it myself, so that i am comfortable with that.

//bar( foo       ) ==
//use( (req)=>{} )

