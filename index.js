let itemText = document.getElementById("add-input");
let button = document.querySelector(".button-submit");
let outputItem = document.querySelector("#listBox");
alert("Alert");

button.addEventListener("click", itemCreation());

function itemCreation() {
    outputItem.appendChild(itemText);
    alert("Child Appended");
}