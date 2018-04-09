Briefly attempted to reproduce the seeming "javascript magic" i see going in [writing middleware](https://expressjs.com/en/guide/writing-middleware.html) with the code below in an ill-defined assumption test. I was intrigued because of >...< this sentence:

    Middleware functions are functions that have access to the request
    object (req), the response object (res), and the next function

However it's becoming rapidly obvious I'm not *really* specifying any *assumptions* nor am I really testing any specific outcomes. I simply *lurched* (lept) right into testing a *spurious* inkling of concern, but **hardly** modulated it into any kind of controlled examination to build up any particular outcome of knowledge.


##### redefining my test

Specifically what's *still bothering me* about this sentence above **was not tested** below.  It was ... illogical to ~~jump immediately to~~ *allow distraction by* original `express` code. It took 15 minutes & typing markdown to realize the following: I need to prioritize my learning carefully.

I acknowledge I have **tons** of hidden unknowns about the underlying JavaScript fundamental concepts that everything is built upon. I should have chosen to explore specifically that aspect, the **callbacks** and/or **promises**, and/or *whatever it is* that allows "express middleware stuff" to work.

Honestly I see the identical parallel with my time struggling at Paymentus over Java fundamentals. It's history repeating.

I'm "undoing" my initial ~~goal above~~ *test below*, and "recasting" focus on another ~~goal~~ *test*. Originally I tried to reproduce express itself with `module.exports`. I'm setting aside examining `any` and `<this>`, in favor of instead **just thinking about JavaScript fundamentals of callbacks** instead.


# better

##### hopefully better test `/2`

umm...
inject variables.
go.
did it.
from memory.

    function foo() {
        console.log("fool");
    }

    function bar(qux) {
        qux();
    }

    bar(foo);


##### better `/2` (b)




# acceptance

##### ill-defined assumption test `/1`

index.js:

    const expressIan = require('./express-ian');
    const app = expressIan();

    app.get();

express-ian.js:

    module.exports = {
        get : function (){   //specifically chosen `get` property name.
            return this;     //random idea
        }()
    };

Examining the original source code of `express` itself, I see several syntactic things going on that elude me. This:

    get: ((name: string) => any) & IRouterMatcher<this>;

I ~~see little merit~~ *do not currently see value* in examining what `any` or `<this>` does right now.