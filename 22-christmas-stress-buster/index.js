const btn = document.getElementById("btn");
let timer = document.getElementById("timer");
let affirmation = document.getElementById("affirmation");

let startingTime = 90;
let timeout = startingTime;

const displayTime = () => {
    
    let minutes = Math.floor(timeout / 60);
    let seconds = timeout % 60;

    if (seconds >= 10) {
        timer.innerText = `${minutes}:${seconds}`;
    } else {
        timer.innerText = `${minutes}:0${seconds}`;
    }
}

const bustStress = () => {
    
    btn.style.visibility = "hidden";

    const timerInterval = setInterval(function () {
        timeout--;

        if (timeout >= 0) {
            displayTime();    
        } else {
            clearInterval(timerInterval);
            timeout = startingTime;
            displayTime();
            btn.style.visibility = "visible";
        }
    }, 1000);
};

displayTime();
btn.addEventListener("click", bustStress);

// Task:
// - Write a function to start the countdown timer on the button click and display it in the DOM. Stop the timer when it reaches 0.

// Stretch goals:
// - Show a relaxing image in the background while the timer is running.
// - Play relaxing music.
