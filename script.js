window.onload = function() {
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
    let Interval;
    startBtn.onclick = () => {
        clearInterval(Interval)
        Interval = setInterval(startTimer,10)
    }

    stopBtn.onclick = () => {
        clearInterval(Interval)
    }
    resetBtn.onclick = () => {
        clearInterval(Interval)
        tens = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
       
        displayTimer();

    }


    function displayTimer() {
        if(tens > 99) {
            seconds++;
            tens = 0
        }
      
        if(seconds >= 60) {
            minutes += Math.floor(seconds / 60);
            seconds = 0
        }
        if(minutes > 59) {
            hours += Math.floor(minutes / 60);
            minutes = 0
        }

        if(hours > 23) {
        }
        appendTens.innerText = (tens <= 9 ? "0": "") + tens;
        appendSeconds.innerText = (seconds <= 9 ? "0": "") + seconds;
        appendMinutes.innerText = (minutes <= 9 ? "0": "") + minutes;
        appendHours.innerText = (hours <= 9 ? "0": "") + hours;
    }
    function startTimer() {
        tens++;
        displayTimer();
    }
}