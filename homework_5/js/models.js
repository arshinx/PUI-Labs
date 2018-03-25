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
  this.color = color;
  this.image = image;
}
