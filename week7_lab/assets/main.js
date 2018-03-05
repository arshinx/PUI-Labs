
// --- Animals --- //

// Polar Bear (Constructor)
function PolarBear(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Polar Bear";
  this.image = "polar_bear.svg";
}

// Lion (Constructor)
function Lion(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Lion";
  this.image = "lion.svg";
}

// Rabbit (Constructor)
function Rabbit(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Rabbit";
  this.image = "rabbit.svg";
}

// --- Variables --- //
var animals = [new PolarBear, new Lion, new Rabbit];
