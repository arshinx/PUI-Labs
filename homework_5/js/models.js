// --- Pillows --- //

// Pillow (Constructor)
function Pillow(name, description, prices, shapes, colors, images) {
  this.name = name; // Distinct, remains same per product
  this.description = description; // Changes based on product
  this.price = prices; // 4 Choices, changes based on shape
  this.shape = shapes; // 4 Available Shapes, corresponding to image files
  this.color = colors; // 4 choices, adds tint to each piece
  this.image = images; // 4 images each corresponding to the indexed-shape
  this.currentState = currentState; // ["price", "shape", "color", "image"]
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

var pillows = [
  new Pillow(
    "Waxed Canvas Comfort Pillow",
    "Each Pillow is hand sewn in Portland, Oregon, by skilled seamstresses. We didn't cut any corners or skimped any materials when designing this Pillow. This Pillow will last for years of heavy use and will look even better the more you use it.",
    [85, 95, 90, 100], shapes, colors, images[0]
  ),
  new Pillow(
    "B",
    "Each Pillow is hand sewn in Portland, Oregon, by skilled seamstresses. We didn't cut any corners or skimped any materials when designing this Pillow. This Pillow will last for years of heavy use and will look even better the more you use it.",
    [85, 95, 90, 100], shapes, colors, images[1]
  ),
  new Pillow(
    "C",
    "Each Pillow is hand sewn in Portland, Oregon, by skilled seamstresses. We didn't cut any corners or skimped any materials when designing this Pillow. This Pillow will last for years of heavy use and will look even better the more you use it.",
    [85, 95, 90, 100], shapes, colors, images[2]
  ),
  new Pillow(
    "D",
    "Each Pillow is hand sewn in Portland, Oregon, by skilled seamstresses. We didn't cut any corners or skimped any materials when designing this Pillow. This Pillow will last for years of heavy use and will look even better the more you use it.",
    [85, 95, 90, 100], shapes, colors, images[3]
  ),
  new Pillow(
    "E",
    "Each Pillow is hand sewn in Portland, Oregon, by skilled seamstresses. We didn't cut any corners or skimped any materials when designing this Pillow. This Pillow will last for years of heavy use and will look even better the more you use it.",
    [85, 95, 90, 100], shapes, colors, images[4]
  ),
  new Pillow(
    "F",
    "Each Pillow is hand sewn in Portland, Oregon, by skilled seamstresses. We didn't cut any corners or skimped any materials when designing this Pillow. This Pillow will last for years of heavy use and will look even better the more you use it.",
    [85, 95, 90, 100], shapes, colors, images[5]
  ),
  new Pillow(
    "G",
    "Each Pillow is hand sewn in Portland, Oregon, by skilled seamstresses. We didn't cut any corners or skimped any materials when designing this Pillow. This Pillow will last for years of heavy use and will look even better the more you use it.",
    [85, 95, 90, 100], shapes, colors, images[6]
  ),
  new Pillow(
    "H",
    "Each Pillow is hand sewn in Portland, Oregon, by skilled seamstresses. We didn't cut any corners or skimped any materials when designing this Pillow. This Pillow will last for years of heavy use and will look even better the more you use it.",
    [85, 95, 90, 100], shapes, colors, images[7]
  ),
  new Pillow(
    "I",
    "Each Pillow is hand sewn in Portland, Oregon, by skilled seamstresses. We didn't cut any corners or skimped any materials when designing this Pillow. This Pillow will last for years of heavy use and will look even better the more you use it.",
    [85, 95, 90, 100], shapes, colors, images[8]
  ),
];

// --- Functions --- //

/*
** "Helper Function"
** Returns random number based on input range
** (between 0 to, and not including, maxIndex)
*/
function generateRandomIndex(min, max) {
  return (Math.floor(Math.random() * max) + min);
}

/*
** Gets a random shape from the shapes array
** Returns shape as a String
*/
function generateRandomShape() {
  return shapes[generateRandomIndex(0, shapes.length)];
}

/*
** Gets a random color from the colors array
** Returns color as a String
*/
function generateRandomColor() {
  return colors[generateRandomIndex(0, colors.length)];
}

/*
** Gets a random price from an estimated range
** Note: Price must be a multiple of 5
** Returns price as a number/double
*/
function generateRandomPrice() {
  var basePrice = generateRandomIndex(15, 155);
  return (basePrice - basePrice%5);
}

/*
** Generates a random pillow
** Randomly selects pillow shape, color and price
*/
function generateRandomPillow() {
  // random index to choose animal type
  var pillowIndex = generateRandomIndex(0, pillows.length);
  // get a random animal
  var pillow = pillows[pillowIndex]
  // identify and create animal

}
