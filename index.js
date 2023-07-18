let itemText = document.getElementById("add-input");
let button = document.querySelector(".button-submit");
let outputItem = document.querySelector("#listBox");
let buttonDelete = document.querySelector(".button-delete");
//alert("Alert");

button.addEventListener("click", itemCreation);


function itemCreation() {
    let newItemElement = document.createElement('p');
   // let newItemButton = document.createElement('button');
    let newItem = document.createTextNode(itemText.value);
   // let newItemButtonText = document.createTextNode('removeItem');

    newItemElement.appendChild(newItem);
    //newItemButton.appendChild(newItemButtonText);
    outputItem.appendChild(newItemElement);
    // document.outputItem.appendChild(newItemButton);
    //DELETE BUTTON NEEDED

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
