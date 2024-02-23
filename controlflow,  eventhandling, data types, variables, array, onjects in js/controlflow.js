// conditional statement :if else 

let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is less than or equal to 5");
}

//loops:
//for loop  

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// while loop

let count = 0;
while (count <= 5) {
    console.log("Count is: " + count);
    count++; // Increment the count
}

// for in loop :In Object 
//the for loop in loop allows you to loop through the properties of an object

var colors = {
    primary : 'Red',
    secondary : 'Green',
    ternary : 'Blue'

}

for (var color in colors) {
    console.log (color +'->'+colors[color])
}


//for of loop : string
//the for of loop statement creates loop iterating over iterable objects

var str ='kajal'

for( var A of str ){
    console.log(A)
}