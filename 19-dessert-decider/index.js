const btn = document.getElementById("btn");
const foodHolder = document.getElementById("foodHolder");

const renderDessert = (data) => {
    
    // check if there is already a dessert image present, if so remove it
    if (document.contains(document.getElementById("dessertImage"))) {
        document.getElementById("dessertImage").remove();
    }
    
    // create an image node with img from the API data
    const node = document.createElement('img');
    node.id = 'dessertImage';
    node.alt = 'dessert';
    node.src = data.image;
    foodHolder.appendChild(node); 
}

const findYum = async () => {
    
    try {
        let response = await fetch(`https://foodish-api.herokuapp.com/api/images/dessert`);
        let data = await response.json();
        renderDessert(data);
    } catch (err) {
        console.log('Error: ', err);
    }
}

btn.addEventListener("click", findYum);

/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert

Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/