const  startButton = document.getElementById("js--start");
const stopButton = document.getElementById("js--stop");
const resetButton = document.getElementById("js--reset");
let seconds = 0;
let minutes = 0;
let running = false; /* standaard telt die nog niet */

const secondsTimer = document.getElementById("js--secondsTimer")
const minuteTimer = document.getElementById("js--minuteTimer")

let timer;

startButton.onclick = function(){
    if(running === true){ /* stopwatch al loopt dan mag je niks doen */
        return;
    } 
    running = true;
    timer = setInterval(function(){
        seconds = seconds + 1; 
        if(seconds ===60){
            minutes = minutes + 1;
            minuteTimer.innerText = minutes;
            seconds = 0;
        }
        secondsTimer.innerText = seconds; /* <-- Dit is in milliseconden 1000ms = 1 seconden */
    },  100); 
}

stopButton.onclick = function(){
    clearInterval(timer);
    running = false;
}
resetButton.onclick = function(){
    clearInterval(timer)
    running = false
    minutes = 0
    seconds = 0 
    secondsTimer.innerHTML = seconds;
    secondsTimer.innerHTML = minutes;
}

/* De slider begint hier */

const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--body");
console.log(body);
slider.value = 2;
rangeValue.innerText = slider.value + "x";

slider.oninput = function(){
    rangeValue.innerText = slider.value + "x";
    body.style.fontSize = slider.value + "rem";
}

const oudgebouw = document.getElementById("js--img")


    const paragraph = document.getElementById("js--text");
//data ophalen
let data = fetch("../data.json").then(
    function(binnenGekomenData){
        return binnenGekomenData.json();
    }).then(
        function(echteData){
            paragraph.innerHTML = echteData.text;
            oudgebouw.setAttribute("src",echteData.img);
        }
    );



const text = document.getElementById("js--text");