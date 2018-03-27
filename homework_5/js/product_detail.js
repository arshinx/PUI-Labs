// Product Detail Page

// Helpers
function deselectColor() {
  $(".color-choice.green").attr('style','border: 1px solid #efbfbb');
  $(".color-choice.yellow").attr('style','border: 1px solid #efbfbb');
  $(".color-choice.orange").attr('style','border: 1px solid #efbfbb');
  $(".color-choice.blue").attr('style','border: 1px solid #efbfbb');
}

function changeColor(color) {

  // Update selected color for pillow
  var pillow = JSON.parse(localStorage.getItem("selectedProduct"));
  pillow.currentState[2] = color;
  localStorage.setItem("selectedProduct", JSON.stringify(pillow));

  if (color == "Green") {
    $(".product-image").attr('style','-webkit-filter: sepia(90%) hue-rotate(90deg)');
    deselectColor();
    $(".color-choice.green").attr('style','border: 5px solid #efbfbb'); // Chosen
  } else if (color == "Yellow") {
    $(".product-image").attr('style','-webkit-filter: sepia(90%) hue-rotate(25deg)');
    deselectColor();
    $(".color-choice.yellow").attr('style','border: 5px solid #efbfbb'); // Chosen
  } else if (color == "Orange") {
    $(".product-image").attr('style','-webkit-filter: sepia(90%) hue-rotate(320deg)');
    deselectColor();
    $(".color-choice.orange").attr('style','border: 5px solid #efbfbb'); // Chosen
  } else { // blue
    $(".product-image").attr('style','-webkit-filter: sepia(90%) hue-rotate(150deg)');
    deselectColor();
    $(".color-choice.blue").attr('style','border: 5px solid #efbfbb'); // Chosen
  }
}

// -- Use JQuery
$(document).ready(function() {

  // Get the selected product / pillow
  var selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

  // name
  $(".product-name").html(selectedProduct.name);
  // price
  $(".product-price").html("$" + selectedProduct.currentState[0] + ".00");
  // shape
  $(".shapeSelect").val(selectedProduct.currentState[1]);
  // color
  changeColor(selectedProduct.currentState[2]);
  // pic
  $(".product-image").attr("src", "../" + selectedProduct.currentState[3]);

  // Choosing a Color
  $(".color-choice.green").click(function(){
    changeColor("Green");
  });
  $(".color-choice.yellow").click(function(){
    changeColor("Yellow");
  });
  $(".color-choice.orange").click(function(){
    changeColor("Orange");
  });
  $(".color-choice.blue").click(function(){
    changeColor("Blue");
  });

  // -- Cart and Wishlist --
  var cart, wishlist;

  $(".add-to-cart").click(function() {
    // Retrieve Cart Array (or create if DNE)
    if (JSON.parse(localStorage.getItem("cart"))) {
      cart = JSON.parse(localStorage.getItem("cart")); // get cart
    } else {
      cart = []; // create cart
    }
    // Get current product
    selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    // Add Current Pillow to cart
    cart.push(selectedProduct);
    // Save Cart
    localStorage.setItem("cart", JSON.stringify(cart));
    // Reload Page
    location.reload();
    // Redirect to cart
    window.location.href = "../shopping-cart/index.html";
  });
  $(".add-to-wishlist").click(function(){
    // Retrieve Wishlist Array (or create if DNE)
    if (JSON.parse(localStorage.getItem("wishlist"))) {
      wishlist = JSON.parse(localStorage.getItem("wishlist")); // get wishlist
    } else {
      wishlist = []; // create wishlist
    }
    // Get current product
    selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    // Add Current Pillow to wishlist
    wishlist.push(selectedProduct);
    // Save wishlist
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  });

});
