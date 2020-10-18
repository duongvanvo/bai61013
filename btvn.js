// Bài 6
var changeBGColorBtnRed = document.getElementById('btn-red')
var changeBGColorBtnBlue = document.getElementById("btn-blue")
var changeBGColorBtnReset = document.getElementById("btn-resetColor")
var changeBGColor = document.getElementById("bg")

changeBGColorBtnBlue.addEventListener("click", () => {
    changeBGColor.style.backgroundColor='blue'
    changeBGColor.style.color='white'
})
changeBGColorBtnRed.addEventListener("click", () => {
    changeBGColor.style.backgroundColor='red'
    changeBGColor.style.color='white'
})
changeBGColorBtnReset.addEventListener("click", () => {
    changeBGColor.style.backgroundColor= "white"
    changeBGColor.style.color='black'
})

// Bài 10
hide = () => {
    document.getElementById('tran').style.overflow ="hidden"
}

readmore = () => {
    document.getElementById('tran').style.overflow ="visible"
}

// Bài 13
var minutes = 00;
var seconds = 00;
var tens = 00;
var apTens = document.getElementById("tens")
var apSeconds = document.getElementById("seconds")
var apMinutes = document.getElementById("minutes")
var btnStart = document.getElementById("btn-start")
var btnStop = document.getElementById("btn-stop")
var btnReset = document.getElementById("btn-reset")
var interval;

function startClock() {
    tens++;
    if (tens < 9) {
        apTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        apTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        apSeconds.innerHTML = "0" + seconds;
        tens = 0;
        apTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        apSeconds.innerHTML = seconds;
    }
    if (seconds > 60) {
        minutes++;
        apMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        apSeconds.innerHTML = "0" + 0
    }
}

btnStart.onclick = function () {
    interval = setInterval(startClock);
}
btnStop.onclick = function () {
    clearInterval(interval)
}
btnReset.onclick = function () {
    clearInterval(interval)
    tens = "00";
    seconds = "00";
    minutes = "00";
    apTens.innerHTML = tens;
    apSeconds.innerHTML = seconds;
    apMinutes.innerHTML = minutes;
}