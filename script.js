let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let resetBtn = document.querySelector('#reset');

let appendHours = document.querySelector('#hours');
let appendMinutes = document.querySelector('#minutes');
let appendSeconds = document.querySelector('#seconds');
let appendTens = document.querySelector('#tens');


class Timer {
	constructor(hoursElement, minutesElement, secondsElement, tensElement) {
		this.hoursElement = hoursElement;
		this.minutesElement = minutesElement;
		this.secondsElement = secondsElement
		this.tensElement = tensElement;

		this.timerInterval;
		this.startTime;
		this.elapsedTime = 0;

		this.updateTimer = this.updateTimer.bind(this);
	}

	start() {
		this.startTime = performance.now() - this.elapsedTime;
		if(!this.timerInterval)
			this.timerInterval = setInterval(this.updateTimer, 10);
	}

	stop() {
		clearInterval(this.timerInterval);
		this.timerInterval = null;
	}

	reset() {
		clearInterval(this.timerInterval);
		this.timerInterval = null;
		this.elapsedTime = 0;
		this.startTime = performance.now();
		this.updateTimer();
	}

	toggle() {
		if(this.timerInterval) {
			this.stop();
		} else {
			this.start();
		}
	}

	updateTimer() {
		this.elapsedTime = performance.now() - this.startTime;
		console.log(this);
		this.displayTime(this.elapsedTime);
	}

	displayTime(elapsedTime) {
		
		let tens = Math.floor(elapsedTime / 10 % 100);
		let seconds = Math.floor(elapsedTime / 10 / 100 % 60);
		let minutes = Math.floor((elapsedTime / 10 / 100 / 60) % 60);
		let hours = Math.floor((elapsedTime / 10 / 100 / 60 / 60));
		
		this.tensElement.innerText = (tens <= 9 ? "0": "") + tens;
		this.secondsElement.innerText = (seconds <= 9 ? "0": "") + seconds;
		this.minutesElement.innerText = (minutes <= 9 ? "0": "") + minutes;
		this.hoursElement.innerText = (hours <= 9 ? "0": "") + hours;
	}
}

const timer = new Timer(appendHours, appendMinutes, appendSeconds, appendTens);

window.onload = function() {

	//this prevents the site scrolling when pressing space button
	window.onkeydown = function(e) { 
		return !(e.keyCode == 32);
	};
	//checking what key you pressed and then executing the code
	document.body.addEventListener('keydown', (ev) => {
		if(ev.key == " ") {
			timer.toggle();
		} else if(ev.key == "Escape") {
			timer.reset()
		}
	})

	startBtn.onclick = () => {
		timer.start();
	}

	stopBtn.onclick = () => {
		timer.stop();
	}

	resetBtn.onclick = () => {
		timer.reset();
	}

}