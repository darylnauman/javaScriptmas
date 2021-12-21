const greeting = document.getElementById("greeting")
const christmassifierBtn = document.getElementById("christmassifierBtn")
christmassifierBtn.addEventListener("click", christmassifyName)

function christmassifyName() {

    // -- Solution that checks text content of button
    if (christmassifierBtn.innerText === 'Christmassify') {
        greeting.classList.toggle("christmassified");
        christmassifierBtn.innerText = "De-christmassify";
    } else {
        greeting.classList.toggle("christmassified");
        christmassifierBtn.innerText = "Christmassify";
    }
    
    // -- Another solution that checks classes on the greeting to see if already 'christmassified'
    // if (greeting.classList.contains("christmassified")) {
    //     greeting.classList.remove("christmassified");
    //     christmassifierBtn.innerText = "Christmassify";
    // } else {
    //     greeting.classList.add("christmassified");
    //     christmassifierBtn.innerText = "De-christmassify";
    // }
    
}

// Task:
// - Add christmassify class to greeting.
// - Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"

// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.