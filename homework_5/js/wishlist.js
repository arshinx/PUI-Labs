// Shopping wishlist

var wishlist = JSON.parse(localStorage.getItem("wishlist"));
console.log(wishlist);

// Calculates and Displays total price of wishlist items
function totalPrice() {
  // Properties
  var totalPrice = 0;
  wishlist = JSON.parse(localStorage.getItem("wishlist"));
  // Calculate Total Price
  for (var i = 0; i < wishlist.length; i++) {
    totalPrice += wishlist[i].currentState[0];
  }
  // Display Total Price
  $(".total-price").html("Total: $" + totalPrice + ".00");
}

// Displays a wishlist item with all its properties, tracks by id:index mapping
function showwishlistItem(item, index) {
  var wishlist = $(".wishlist");
  wishlist.append("<div class=wishlist-item id=" + index + "><div class=main-content id=wrapper><div class=right-section><h2 class=product-name>" + item.name + "</h2><h3 class=product-price>$" + item.currentState[0] + ".00</h3><h4><span>" + item.currentState[2] + "</span> | <span>" + item.currentState[1] + "</span></h4><button class=delete-item>Remove - X</button></div><div class=left-section><img alt=pillow class=product-image height=200 src='../" + item.currentState[3] + "' width=200></div><div id=cleared></div></div><span class=horizontal-line></span></div>");
}

// On click - delete
$(document).on("click", ".delete-item", function() {
  // Delete element with id #
  var index = $(this).parent().parent().parent().attr('id');
  //wishlist = wishlist.splice(index, 1);
  console.log(wishlist.splice(index, 1));
  // Save wishlist
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  // Remove Element from DOM
  $(this).parent().parent().parent().remove();
  // Reload Page
  location.reload();
});

// HTML Loaded
$(document).ready(function() {
  // wishlist
  wishlist = JSON.parse(localStorage.getItem("wishlist"));
  // Show all Items
  for (var i = 0; i < wishlist.length; i++) {
    showwishlistItem(wishlist[i], i);
  }
  // Show Total Price
  totalPrice();
});
