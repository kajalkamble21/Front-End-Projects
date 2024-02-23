// callback function is a function used as an argument to the another fuction 

// Example of callback function 

function PrintFirstName(firstname , cb){  //cb is the callback argument
    console.log(firstname)
    cb('Kamble')
}

PrintFirstName('Kajal', PrintLastName) //callback 

function PrintLastName(lastname){
    console.log(lastname)
}

