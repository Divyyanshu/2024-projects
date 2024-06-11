
// promises (resolve,reject)
 let walking = function(){
    return new Promise(()=>{
        let walkER = TRUE ;
        if(walkER === res){
            console.log("helloo reslover")
        }
        else{
            console.log("hello rejector")
        }
    })
 }


 walking().then((div)=>console.log(div)).catch((jak)=>console.error(jak))
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