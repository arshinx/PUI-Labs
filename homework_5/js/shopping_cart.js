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
