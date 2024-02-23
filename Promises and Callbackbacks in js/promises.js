//A promise is an object there is 3 states of the promise object 

/*pending :initial state , before promise succeeds or fail
  Resolved: Completed Promise
  Rejected: Failed Promise */

  //Example :

  const myPromise = new Promise((resolved , rejected )=>{
    const a=5, b=6;
    const c=a+b;

    if (c==4){
       resolved(`the sum of is equals to ${a}+${b} = 4`);   //resolved function
    }
    else{
        rejected(`The  sum of ${a}+${b} is not equals to 4`);   
    }
  });

  let message;

  myPromise.then((m)=>{
    console.log(m);

  }).catch((err)=>{          // catch if promise not fulfill
    console.log(err);
  })