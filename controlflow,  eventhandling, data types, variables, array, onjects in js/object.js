// Objects in javascript

var cap = {

    FirstName : 'steve',
    LastName : 'Rogers', 
    Age : 12,

    friends : ['Aarti', 'Ashana','Kaju'], 

    isAvenger:true,

    Add : {
        state: 'Newyork',
        city: {

            Name:'Booklyn',
            pincode:12345
        }
    } 
    
    
} 
 
//print objects  
console.log(cap)  

// Access Objects 

console.log(cap.Add.city.Name)  

console.log (cap.friends[2])

// update Data

cap .isAvenger = false 

console.log(cap) 

//Add new property 

cap . movies = ['the war','120 black Days'] 

console.log (cap) 

//delete property 

 delete cap.Age 

 console.log(cap) 

 cap.Age=15

 console.log(cap)