const ageSelector = document.getElementById("age-selector")
const genreSelector = document.getElementById("genre-selector")

const btn = document.getElementById("btn")
const suggestedMovie = document.getElementById("suggested-movie")

const moviesArr = [
    {
        name: "Die Hard",
        age: "18+",
        genre: "Action"
    },
    {
        name: "Love Actually",
        age: "18+",
        genre: "Romance"
    },
    {
        name: "The Polar Express",
        age: "PG",
        genre: "Action"
    },
    {
        name: "Shrek",
        age: "PG",
        genre: "Romance"
    }
]

const selectMovie = () => {    
    for (let i = 0; i < moviesArr.length; i++) {
        if (moviesArr[i].age === ageSelector.value && moviesArr[i].genre === genreSelector.value) {
            suggestedMovie.innerText = moviesArr[i].name;
        }
    }    
}

btn.addEventListener("click", selectMovie)

// Task: 
// - Write a function to select a suitable movie based on the age group and genre provided.
//  - Display it in the suggested-movie paragraph when the button is clicked.