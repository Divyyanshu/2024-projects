
// promises (resolve,reject)
 let walking = function(){
    let wasIWalking = false ;
    return new Promise((resolve,reject)=>{
        if(wasIWalking === true){
            resolve('i was walking')
        }
        else{
            reject("i was not walking")
        }
    })
 }


walking().then((res)=>console.log(res)).catch((rej)=>console.error(rej))
//  let sleeping = function(){
//      console.log("i am sleppping")
//  }
//  let running = function(){
//      console.log("i am running")
//  }
//  let talking = function(){
//      console.log("i am talking")
//  }
//  let eating = function(){
//      console.log("i am eating")
//  }


//  setTimeout(walking , 2000)
//  setTimeout(sleeping ,4000)
//  setInterval(running ,2000)
//  setTimeout(talking ,8000)
//  setTimeout(eating ,10000)