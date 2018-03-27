// Shopping Cart

var cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart);

// Calculates and Displays total price of cart items
function totalPrice() {
  // Properties
  var totalPrice = 0;
  cart = JSON.parse(localStorage.getItem("cart"));
  // Calculate Total Price
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].currentState[0];
  }
  // Display Total Price
  $(".total-price").html("Total: $" + totalPrice + ".00");
}

// Displays a cart item with all its properties, tracks by id:index mapping
function showCartItem(item, index) {
  var cart = $(".cart");
  cart.append("<div class=cart-item id=" + index + "><div class=main-content id=wrapper><div class=right-section><h2 class=product-name>" + item.name + "</h2><h3 class=product-price>$" + item.currentState[0] + ".00</h3><h4><span>" + item.currentState[2] + "</span> | <span>" + item.currentState[1] + "</span></h4><button class=delete-item>Remove - X</button></div><div class=left-section><img alt=pillow class=product-image height=200 src='../" + item.currentState[3] + "' width=200></div><div id=cleared></div></div><span class=horizontal-line></span></div>");
}

// On click - delete
$(document).on("click", ".delete-item", function() {
});

// HTML Loaded
$(document).ready(function() {
  // Cart
  cart = JSON.parse(localStorage.getItem("cart"));
  // Show all Items
  for (var i = 0; i < cart.length; i++) {
    showCartItem(cart[i], i);
  }
  // Show Total Price
  totalPrice();
});
