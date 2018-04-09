let app = {};
app.getNadda = function(){};
app.getExec = function(one){one()};
app.getMutated = function(one){one()};


let req = {onze: 11};

app.getMutated( function(req, res, next){
	req.douze = 12;     //TypeError: Cannot set property 'douze' of undefined
	let breakpoint = 3;
	breakpoint++;
} );



app.getExec( function(req, res, next){
	let breakpoint = 3;
	breakpoint++;
} );


app.getNadda( function(req, res, next){
	let breakpoint = 3;
	breakpoint++;
});