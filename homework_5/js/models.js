// --- Pillows --- //

// Pillow (Constructor)
function Pillow(name, description, prices, shapes, colors, images) {
  this.name = name; // Distinct, remains same per product
  this.description = description; // Changes based on product
  this.price = prices; // 4 Choices, changes based on shape
  this.shape = shapes; // 4 Available Shapes, corresponding to image files
  this.color = colors; // 4 choices, adds tint to each piece
  this.image = images; // 4 images each corresponding to the indexed-shape
  this.currentState = currentState; // [price, shape, color, image]
}

// Change Shape (and Image)
Pillow.prototype.changeShape = function(newShape) {
  this.shape = shape;
}

// Change Color (and add Tint)
Pillow.prototype.changeColor = function(newColor) {
  this.color = color;
}

// --- Data --- //

var selectedProduct; // User selects product while browsing
var shoppingCart = []; // Tracks Cart Items
var Wishlist = []; // Tracks Wishlist Items
var suggestedProducts = []; // 5 items excluding the selected item for carousel

var shapes = ["Square", "Circle", "Triangle", "Heart"];
var colors = ["Green", "Yellow", "Red", "Blue"];
var images = [
  ["assets/img/", "assets/img/", "assets/img/"], // 1
  ["assets/img/", "assets/img/", "assets/img/"],
  ["assets/img/", "assets/img/", "assets/img/"],
  ["assets/img/", "assets/img/", "assets/img/"], // 4
  ["assets/img/", "assets/img/", "assets/img/"],
  ["assets/img/", "assets/img/", "assets/img/"], // 6
  ["assets/img/", "assets/img/", "assets/img/"],
  ["assets/img/", "assets/img/", "assets/img/"],
  ["assets/img/", "assets/img/", "assets/img/"], // 9
];
}
