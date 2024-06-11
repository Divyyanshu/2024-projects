const clock = document.getElementById("clock")

// using set interval this  is a async coding its cover in promises 

setInterval(()=>{
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)