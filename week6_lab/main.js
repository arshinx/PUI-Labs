
// Test Function
function addNewList() {
    alert('hello world!');
}

// -- JS (Non-Jquery Version) --
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

// -- JQuery Version --

// On click - add item
$(document).on("click", ".complete-item", function() {
  console.log($(this));
  if ($(this).checked) {
    $(this).parent().remove();
  }
});

// On click - delete
$(document).on("click", ".delete-item", function() {
    $(this).parent().remove();
});

// On click - complete todo item
$(document).on("click", "#add-item", function() {
    var list = $("#grocery-list");
    var itemInput = $("#new-list-item");
    list.append("<li>" + "<input type='checkbox' class='complete-item'>" + itemInput.val() + " <button class='delete-item'>X</button></li>");
});

/*
$(document).ready(function(){

  // Add Item
  $("#add-item").click(function() { // bind handler for click event
    var list = $("#grocery-list"); // get the ol list by id
    var itemInput = $("#new-list-item"); // get the new item input
    // append the input value within an li element
    list.append(
      "<li>" + itemInput.val()
      +
      " <button class='delete-item'>X</button></li>"
    );
  });

  // Delete Item
  $(".delete-item").click(function() {
    $(this).parent().remove();
    console.log("test");
  });

});
*/
