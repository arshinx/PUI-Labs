// --- Pillows --- //

// Pillow (Constructor)
function Pillow(name, description, prices, shapes, colors, images, currentState) {
  this.name = name; // Distinct, remains same per product
  this.description = description; // Changes based on product
  this.prices = prices; // 4 Choices, changes based on shape
  this.shapes = shapes; // 4 Available Shapes, corresponding to image files
  this.colors = colors; // 4 choices, adds tint to each piece
  this.images = images; // 4 images each corresponding to the indexed-shape
  this.currentState = currentState; // ["price", "shape", "color", "image"]
}

// Change Shape (and Image)
Pillow.prototype.changeShape = function(newShape, newImage) {
  this.currentState[1] = newShape;
  this.currentState[3] = newImage;
}

// Change Color (and add Tint)
Pillow.prototype.changeColor = function(newColor) {
  this.currentState[2] = newColor;
}

// Change Price
Pillow.prototype.changePrice = function(newPrice) {
  this.currentState[0] = newPrice;
}

// --- Data --- //

var selectedProduct; // User selects product while browsing
var shoppingCart = []; // Tracks Cart Items
var Wishlist = []; // Tracks Wishlist Items
var suggestedProducts = []; // 5 items excluding the selected item for carousel

var shapes = ["Square", "Circle", "Triangle", "Heart"];
var colors = ["Green", "Yellow", "Orange", "Blue"];
var images = [
  ["./assets/products/pillow-a-1.jpeg", "./assets/products/pillow-a-2.jpeg", "./assets/products/pillow-a-3.jpeg"], // 1
  ["./assets/products/pillow-b-1.jpeg", "./assets/products/pillow-b-1.jpeg", "./assets/products/pillow-b-1.jpeg"],
  ["./assets/products/pillow-c-1.jpeg", "./assets/products/pillow-c-1.jpeg", "./assets/products/pillow-c-1.jpeg"],
  ["./assets/products/pillow-d-1.jpeg", "./assets/products/pillow-d-1.jpeg", "./assets/products/pillow-d-1.jpeg"], // 4
  ["./assets/products/pillow-e-1.jpeg", "./assets/products/pillow-e-1.jpeg", "./assets/products/pillow-e-1.jpeg"],
  ["./assets/products/pillow-f-1.jpeg", "./assets/products/pillow-f-1.jpeg", "./assets/products/pillow-f-1.jpeg"], // 6
  ["./assets/products/pillow-a-1.jpeg", "./assets/products/pillow-a-1.jpeg", "./assets/products/pillow-c-1.jpeg"],
  ["./assets/products/pillow-b-1.jpeg", "./assets/products/pillow-a-1.jpeg", "./assets/products/pillow-a-3.jpeg"],
  ["./assets/products/pillow-c-1.jpeg", "./assets/products/pillow-a-1.jpeg", "./assets/products/pillow-a-3.jpeg"], // 9
];

var pillows = [
  new Pillow(
    "Waxed Canvas Comfort Pillow",
    "Each Pillow is hand sewn in Portland, Oregon, by skilled seamstresses. We didn't cut any corners or skimped any materials when designing this Pillow. This Pillow will last for years of heavy use and will look even better the more you use it.",
    [85, 95, 90, 100], shapes, colors, images[0]
  ),
  new Pillow(
    "Comfort Pillow",
    "Each Pillow is hand sewn in Portland, Oregon, by skilled seamstresses. We didn't cut any corners or skimped any materials when designing this Pillow. This Pillow will last for years of heavy use and will look even better the more you use it.",
    [85, 95, 90, 100], shapes, colors, images[1]
  ),
  new Pillow(
    "Canvas Pillow",
    "Each Pillow is hand sewn in Portland, Oregon, by skilled seamstresses. We didn't cut any corners or skimped any materials when designing this Pillow. This Pillow will last for years of heavy use and will look even better the more you use it.",
    [85, 95, 90, 100], shapes, colors, images[2]
  ),
  new Pillow(
    "Waxed Pillow",
    "Each Pillow is hand sewn in Portland, Oregon, by skilled seamstresses. We didn't cut any corners or skimped any materials when designing this Pillow. This Pillow will last for years of heavy use and will look even better the more you use it.",
    [85, 95, 90, 100], shapes, colors, images[3]
  ),
  new Pillow(
    "Canvas Comfort Pillow",
    "Each Pillow is hand sewn in Portland, Oregon, by skilled seamstresses. We didn't cut any corners or skimped any materials when designing this Pillow. This Pillow will last for years of heavy use and will look even better the more you use it.",
    [85, 95, 90, 100], shapes, colors, images[4]
  ),
  new Pillow(
    "Hand sewn pillow",
    "Each Pillow is hand sewn in Portland, Oregon, by skilled seamstresses. We didn't cut any corners or skimped any materials when designing this Pillow. This Pillow will last for years of heavy use and will look even better the more you use it.",
    [85, 95, 90, 100], shapes, colors, images[5]
  ),
  new Pillow(
    "Portland Pillow",
    "Each Pillow is hand sewn in Portland, Oregon, by skilled seamstresses. We didn't cut any corners or skimped any materials when designing this Pillow. This Pillow will last for years of heavy use and will look even better the more you use it.",
    [85, 95, 90, 100], shapes, colors, images[6]
  ),
  new Pillow(
    "Elegant Artisan Pillow",
    "Each Pillow is hand sewn in Portland, Oregon, by skilled seamstresses. We didn't cut any corners or skimped any materials when designing this Pillow. This Pillow will last for years of heavy use and will look even better the more you use it.",
    [85, 95, 90, 100], shapes, colors, images[7]
  ),
  new Pillow(
    "Fluffy Portland Pillow",
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
function generateRandomShapeImage(pillow) {
  var random = generateRandomIndex(0, pillow.images.length);
  return [pillow.shapes[random], pillow.images[random]];
}

/*
** Gets a random color from the colors array
** Returns color as a String
*/
function generateRandomColor() {
  return colors[generateRandomIndex(0, colors.length)];
}

/*
** Gets a random price from the prices array
** Returns price as a Number/Double
*/
function generateRandomPrice(pillow) {
  return pillow.prices[generateRandomIndex(0, pillow.prices.length)];
}

/*
** Gets a random price from an estimated range
** Note: Price must be a multiple of 5
** Returns price as a number/double
*/
function generateRandomPrices() {
  var basePrice = generateRandomIndex(25, 155);
  var price = basePrice - basePrice%5;
  var prices = [price-10, price, price+10, price+20];
  return prices;
}

/*
** Generates a random pillow
** Randomly selects pillow shape, color and price
*/
function generateRandomPillow() {
  // random index to choose pillow type
  var pillowIndex = generateRandomIndex(0, pillows.length);
  // get a random pillow
  var pillow = pillows[pillowIndex];
  // set pillow prices
  pillow.prices = generateRandomPrices();
  // get pillow shape and img link
  var pillowShapeImg = generateRandomShapeImage(pillow); // ["shape, "img]
  var pillowShape = pillowShapeImg[0];
  var pillowImage = pillowShapeImg[1];
  // Set pillow states - [price, "shape", "color", "image"]
  pillow.currentState = [
    generateRandomPrice(pillow),
    pillowShape,
    generateRandomColor(),
    pillowImage
  ];
  // return pillow
  return pillow;
}

// Generates and saves 5 carousel items
function generateCarouselItems() {
  var carousel = [
    generateRandomPillow(),
    generateRandomPillow(),
    generateRandomPillow(),
    generateRandomPillow(),
    generateRandomPillow()
  ];
  return carousel;
}
