// A closure is a function havinf access to the parent scope. It preserve the data from outside.
// Aclosure is an inner fuction that has access to the outer (enclosing)functions variable.

// for every closure we have three scopes .

/* -local scope (own scope)
-outer functions scope
-global scope*/


//example closure
var i=10;
function show(){
    var j =50;
    console.log(j)
    console.log(i)
}
show();

// Nested Function 

function show(){
    var j= "j is the variable of the outer function";
    console.log(j)

    function innerFun(){
        var k= "K is the local variable of inner function";
        console.log(k)
    }

    innerFun()
}

// Example 3 :

function counter() {
    var count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

var incrementCounter = counter();

incrementCounter(); 
incrementCounter(); 
incrementCounter(); 



