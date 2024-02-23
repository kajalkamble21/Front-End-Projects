// we can call the function everwhere in the code can also write a function top on the function declaration

// we cannot print the values when they decalare with the variables 

// when we decalre a function expresion then we cannot use hoisting


//Example 1
ME()

var a= 45

function ME() { 

    console.log ('hello Everyone')
}

console.log (a)



//Example 2 


greet()

function greet (){
    console.log ('hello from kajal')
}

// when we decalre a function expresion then we cannot use hoisting

var add= function (a,b){
    console.log(a+b)
}

add (5,5)