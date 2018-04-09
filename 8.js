var a = {};
a.one = "one";

function b(something) {
	something.two = "two";
	//return something;
}

b(a);

console.log(a);
