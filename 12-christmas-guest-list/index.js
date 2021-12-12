const input = document.getElementById("input")
const btn = document.getElementById("btn")
let guestList = document.getElementById("guest-list")
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.

/* -- Solution 1 for rendering guest list --
for (let i = 0; i < guests.length; i++) {
    let node = document.createElement("li");
    node.textContent = guests[i];
    guestList.appendChild(node);
}
*/

/* -- Solution 2 for rendering guest list --
for (let i = 0; i < guests.length; i++) {
    guestList.innerHTML += `<li>${guests[i]}</li>`
}
*/

// -- Solution 3 for rendering guest list --
const renderGuests = () => {
    guests.forEach(guest => {
        guestList.innerHTML += `<li>${guest}</li>`
    });    
}

// -- Solution to add functionality to add new guests - updates unordered list only not array
btn.addEventListener("click", ()=> {
    let node = document.createElement("li");
    node.textContent = input.value;
    guestList.appendChild(node);
    input.value = '';
})

renderGuests();

// Stretch goals: 
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?