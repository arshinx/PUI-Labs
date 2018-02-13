function addNewList() {
    alert('hello world!');
}

function addListItem() {
    console.log('hello world');

    // Get the list
    var list = document.getElementById("grocery-list");

    // Get input
    var itemInput = document.getElementById("new-list-item");

    // New todo item
    var newItem = document.createElement("li");

    // New node with input value
    newItem.appendChild(document.createTextNode(itemInput.value));

    // Add new item - display
    list.appendChild(newItem);

}

function deleteListItem(item) {
	    // remove li element (item) from ol element (item.parentNode)
 	    item.parentNode.removeChild(item);
}
