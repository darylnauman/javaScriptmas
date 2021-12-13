const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")

function fix() {
  greeting.textContent = "🎅 Merry Christmas 🎄";
  greeting.style.fontFamily = 'Mountains of Christmas';
  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.
}

btn.addEventListener("click", fix);

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.