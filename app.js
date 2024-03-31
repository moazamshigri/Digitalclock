let hours  = document.querySelector("#hr");
let minute = document.querySelector("#min");
let second = document.querySelector("#sec");

setInterval(() => {

    let currentTime = new Date();
    hours.innerHTML = currentTime.getHours();
    minute.innerHTML = currentTime.getMinutes();
    second.innerHTML = currentTime.getSeconds();
  
},1
)