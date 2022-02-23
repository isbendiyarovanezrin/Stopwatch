"use strict";

const song = document.getElementById("song");
const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const btnReset = document.querySelector(".btn-reset");
const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
let tens = 0;
let seconds = 0;
let interval;

btnStart.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

btnStop.addEventListener("click", stopTimer);
btnReset.addEventListener("click", resetTimer);

function startTimer() {
  song.play();
  tens++;

  if (tens <= 9) {
    appendTens.innerHTML = `0${tens}`;
  } else if (tens > 9 && tens < 100) {
    appendTens.innerHTML = tens;
  } else {
    seconds++;
    tens = 0;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = `0${seconds}`;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}

function stopTimer() {
  song.pause();
  clearInterval(interval);
}

function resetTimer() {
  song.pause();
  clearInterval(interval);
  tens = 0;
  seconds = 0;
  appendTens.innerHTML = "00";
  appendSeconds.innerHTML = "00";
}
