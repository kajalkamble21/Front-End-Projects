// Array provides you order collection of data

var arr = ['Kajal', 12, true, 0.5]

console.log (arr)

//accesing array

var a = arr[1]

console.log (a)

console.log(arr[3]) 

//replace  the  elements by using index array 

arr[1]='Roy'

console.log(arr[1])

console.log (arr)

//Find the Length of array

console.log (arr.length) 


// Inbuilt js Array methods

var arr2 = [12,15,67,90,20]

// pop method 

var b = arr2.pop() 

console.log ('pop element',b)

console.log(arr2) 



//push method 

arr2.push(40)

console.log( 'Push Array ',  arr2) 

// shift method 

var d = arr2.shift() 

console.log (d)

console.log(  'Shifted Array' , arr2)

// Unshift Array Method   : used to push element at the starting of array.


arr2.unshift(155) 

console.log(arr2) 

console.log ('Unshifted Array',arr2)