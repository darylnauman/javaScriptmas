const btn = document.getElementById("btn");
let food = document.getElementById("food");

const numInputEl = document.getElementById("num-input");
const vegetarianInputEl = document.getElementById("vegetarian-input");

const renderDinner = (numOfGuests, isVegetarian) => {
    if (isVegetarian && numOfGuests > 0) {
        food.textContent = 'nut roast.';
    } else if (numOfGuests > 0 && numOfGuests <= 4 ) {
        food.textContent = 'turkey.';
    } else if (numOfGuests >= 5) {
        food.textContent = 'goose.';
    } else {
        alert('Ho ho ho! Please enter a valid number of guests.')
    }
}

btn.addEventListener("click", () => { 
    let numOfGuests = numInputEl.value;  
    let isVegetarian = vegetarianInputEl.checked;
    renderDinner(numOfGuests, isVegetarian)
})

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose 

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.