const meter = document.getElementById("meter");
const message = document.getElementById("message");

const meterDisplay = () => {
    let today = new Date();
    let month = today.getMonth() + 1;

    if (month === 12) {
        let date = today.getDate();
        let timer = 0;

        const timerInterval = setInterval(function () {
            timer++;

            if (timer <= date) {
                meter.setAttribute("value", timer);
            } else {
                clearInterval(timerInterval);
                if (date < 25) {
                    message.innerText = "Getting closer to Christmas!";
                } else if (date === 25) {
                    message.innerText = "Merry Christmas!";
                } else if (date > 25) {
                    message.innerText = "Hope you had a Merry Christmas!";
                }
            }
        }, 100);
    } else {
        message.innerText = "Come back in December!";
    }
};

meterDisplay();

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.
