const crew = document.getElementById("crew");
const messageEl = document.getElementById("message");
const btn = document.getElementById("btn");

btn.addEventListener("click", launch)

let secondsLeft = 5;

function launch() {
    
    btn.style.display = "none";

    let timerInterval = setInterval(function() {
        
        if (secondsLeft > 1) {
            messageEl.textContent = `${secondsLeft} seconds until launch`;
            messageEl.style.display = "block";
        } else if (secondsLeft === 1) {
            messageEl.textContent = `${secondsLeft} second until launch`;
        } else if (secondsLeft === 0) {
            messageEl.style.display = "none";
            clearInterval(timerInterval);
            messageEl.textContent = ``;
            crew.classList.add("swirl-out-top-fwd");
        }

        secondsLeft--;
        
    }, 1000)   
}

// Task:
// - Write a function to launch the sleigh! 
// - See CSS for more tasks.

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.