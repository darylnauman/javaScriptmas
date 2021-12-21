const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")

const audioElement = new Audio('bells.wav');

playBtn.addEventListener("click", () => audioElement.play());

pauseBtn.addEventListener("click", () => audioElement.pause());

stopBtn.addEventListener("click", () => {
    audioElement.pause();
    audioElement.currentTime = 0;
});

// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.