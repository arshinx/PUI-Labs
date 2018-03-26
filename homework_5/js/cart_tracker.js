// Tracks Cart Count

$(document).ready(function() {

  // Var
  var cartLength;

  // Cart Exists?
  if (JSON.parse(localStorage.getItem("cart"))) {
    // Get cartLength
    cartLength = JSON.parse(localStorage.getItem("cart")).length;
  }
  else {
    cartLength = 0; // Cart DNE
  }

  // Update Cart Count in Navbar
  $(".cart-tracker").html(" (" + cartLength + ")");
});
