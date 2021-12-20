const inputs = document.querySelectorAll(".controls input");

const buttons = document.querySelectorAll(".button");
const eyes = document.querySelectorAll(".eye");
const nose = document.querySelector(".nose");

const watchColorPicker = (event) => {
    
    if (event.target.name === "color") {
        eyes.forEach(eye => {
            eye.style.background = event.target.value;
        })
    } else if (event.target.name === "color2") {
        buttons.forEach(button => {
            button.style.backgroundColor = event.target.value;
        })        
    } else {
        nose.style.borderLeftColor = event.target.value;
    }
}

inputs.forEach(input => input.addEventListener("input", watchColorPicker))

// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.