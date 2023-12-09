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

    let lastUpdateTime = 0;
    let isRunning = false;

    startBtn.onclick = () => {
        elapsedTime = performance.now();
        isRunning = true;
        window.requestAnimationFrame(updateTimer);
    }

    stopBtn.onclick = () => {
        isRunning = false;
    }


    resetBtn.onclick = () => {
        isRunning = false;
        hours = 0;
        
    }


    function updateTimer() {
        console.log(performance.now() - lastUpdateTime);
        let deltaTime = Math.round((performance.now() - lastUpdateTime) / 10);
        tens += deltaTime;
        lastUpdateTime = performance.now();

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

        //if(hours > 23) {
        //}
        appendTens.innerText = (tens <= 9 ? "0": "") + tens;
        appendSeconds.innerText = (seconds <= 9 ? "0": "") + seconds;
        appendMinutes.innerText = (minutes <= 9 ? "0": "") + minutes;
        appendHours.innerText = (hours <= 9 ? "0": "") + hours;

        if(isRunning) {
            while(performance.now() - lastUpdateTime < 10);
            requestAnimationFrame(updateTimer);
        }
    }


}