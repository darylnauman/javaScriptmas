const textInputEl = document.getElementById("text-input");
const signEl = document.getElementById("sign");

const updateSign = () => {
    signEl.innerText = textInputEl.value;
}

textInputEl.addEventListener("input", updateSign);


// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.

// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.