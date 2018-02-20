
// Test Function
function addNewList() {
    alert('hello world!');
}

// JS (Non-Jquery Version)
function addListItem() {
    console.log('hello world');

    // Get the list
    var list = document.getElementById("grocery-list");

    // Get input
    var itemInput = document.getElementById("new-list-item");

    // New todo item
    var newItem = document.createElement("li");

    // User input
    var value = itemInput.value;

    if (value.length > 0) {
      // New node with input value
      newItem.appendChild(document.createTextNode(itemInput.value));

      // Add new item - display
      list.appendChild(newItem);
    } else {
      alert("Type something to add to list!");
    }

}

function deleteListItem(item) {
	    // remove li element (item) from ol element (item.parentNode)
 	    item.parentNode.removeChild(item);
}

function completeListItem(item) {
    if (item.checked) { // true if the input checkbox is checked
        item.parentNode.style.textDecoration = "line-through";
        // in css, this would be: "text-decoration: line-through"
    } else {
        item.parentNode.style.textDecoration = "none";
        // in css, this would be: "text-decoration: none"
    }
}

// JQuery Version
$(document).ready(function(){


});
