let itemText = document.getElementById("add-input");
let button = document.querySelector(".button-submit");
let outputItem = document.querySelector("#listBox");
let buttonDelete = document.querySelector(".button-delete");
//alert("Alert");

button.addEventListener("click", itemCreation);


function itemCreation() {
    let newItemElement = document.createElement('p');
    let newItem = document.createTextNode(itemText.value);
    newItemElement.appendChild(newItem);
    outputItem.appendChild(newItemElement);
    //DELETE BUTTON NEEDED
    let removeButton = document.createElement("button");
    removeButton.innerText = "removeItem";
    removeButton.addEventListener('click', function() {
        alert('item removed');
        //delete functionality
    })
    newItemElement.appendChild(removeButton);
    //CREATE CLASS OF ITEMS?
    newItemElement.addEventListener('click', function(){
        newItemElement.classList.toggle("taskDone");
    })
    //outputItem.appendChild(itemText);
    //outputItem.innerHTML = itemText.value;
    // alert("Child Appended");

    buttonDelete.addEventListener('click', function () {
        newItemElement.remove();
        itemElements.pop();
    });

    newItemElement.appendChild(removeButton);
    outputItem.appendChild(newItemElement);
    itemElements.push(newItemElement);

}
