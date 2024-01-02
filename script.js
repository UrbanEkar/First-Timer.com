let hours = 0; 
let minutes = 0;
let seconds = 0;
let tens = 0; 
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let resetBtn = document.querySelector('#reset');

let appendHours = document.querySelector('#hours');
let appendMinutes = document.querySelector('#minutes');
let appendSeconds = document.querySelector('#seconds');
let appendTens = document.querySelector('#tens');

let timerInterval;
let startTime, elapsedTime = 0;

window.onload = function() {
    //this prevents the site scrolling when pressing space button
    window.onkeydown = function(e) { 
        return !(e.keyCode == 32);
    };

    //checking what key you pressed and starting,stopping,reseting
    
    document.body.addEventListener('keydown', (ev) => {
        if(ev.key == " ") {
            startTime = performance.now() - elapsedTime;
            if(!timerInterval)
                timerInterval = setInterval(updateTimer, 10);
        }else if(ev.key == "Shift") {
            clearInterval(timerInterval);
            timerInterval = null;
        }else if(ev.key == "Control") {
            clearInterval(timerInterval);
            timerInterval = null;
            elapsedTime = 0;
            startTime = performance.now();
            hours = 0;
            updateTimer();
        }return
    })

    startBtn.onclick = () => {
        startTime = performance.now() - elapsedTime;
        if(!timerInterval)
            timerInterval = setInterval(updateTimer, 10);
    }

    stopBtn.onclick = () => {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    //when shift is pressed down, the reset button starts working

    resetBtn.onclick = () => {
        clearInterval(timerInterval);
        timerInterval = null;
        elapsedTime = 0;
        startTime = performance.now();
        hours = 0;
        updateTimer();
    }


    function updateTimer() {
        elapsedTime = performance.now() - startTime;
        
        displayTime(elapsedTime);
    }

    function displayTime(elapsedTime) {
        
        tens = Math.floor(elapsedTime / 10 % 100);
        seconds = Math.floor(elapsedTime / 10 / 100 % 60);
        minutes = Math.floor((elapsedTime / 10 / 100 / 60) % 60);
        hours = Math.floor((elapsedTime / 10 / 100 / 60 / 60));
        
        appendTens.innerText = (tens <= 9 ? "0": "") + tens;
        appendSeconds.innerText = (seconds <= 9 ? "0": "") + seconds;
        appendMinutes.innerText = (minutes <= 9 ? "0": "") + minutes;
        appendHours.innerText = (hours <= 9 ? "0": "") + hours;
    }

}