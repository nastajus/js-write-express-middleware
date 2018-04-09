function foo(lorem, ipsum, dolor) {
	console.log("fool");
	console.log(arguments[0]);
}

function bar(qux) {
	qux();
	console.log('---');
}

//trying random shit without a specific goal
bar(foo);
bar( ()=>{} );
bar( ()=>{ console.log("anon")} );
/*
bar(foo());  //TypeError: qux is not a function    -->    since `foo()` returns `undefined`,
														  // my "external fn" is trying to call `undefined()`
*/

//trying somewhat more specific shit (but still just as random shit) to reproduce `express`-like umm 'syntax' is it?
bar( ()=>{ console.log("curly")}, ()=>{ console.log("larry")} );

