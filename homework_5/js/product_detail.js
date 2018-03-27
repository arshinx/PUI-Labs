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

}

// -- Use JQuery
$(document).ready(function() {

  var selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
  console.log(selectedProduct);
});
