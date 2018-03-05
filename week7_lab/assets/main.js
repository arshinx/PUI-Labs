
// --- Animals --- //

// Polar Bear (Constructor)
function PolarBear(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Polar Bear";
  this.image = "assets/polar_bear.svg";
}

// Lion (Constructor)
function Lion(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Lion";
  this.image = "assets/lion.svg";
}

// Rabbit (Constructor)
function Rabbit(name, age) {
  this.name = name;
  this.age = age;
  this.type = "Rabbit";
  this.image = "assets/rabbit.svg";
}

// --- Variables --- //
var animals = [new PolarBear, new Lion, new Rabbit];
var names   = ["Rio", "Tae", "Bon"];

// --- Functions --- //

/*
** "Helper Function"
** Returns random number based on input range
** (between 0 to, and not including, maxIndex)
*/
function generateRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

/*
** Gets a random name from the names array
** Returns name as a String
*/
function generateRandomName() {
  return names[generateRandomIndex(names.length)];
}

/*
** Generates a random age
** Returns age as int
** Assume that the age of "0" implies "less than a year"
*/
function generateRandomAge() {
  return generateRandomIndex(35);
}

/*
** Generates a random animal
** Randomly selects animal type, name and age
*/
function generateRandomAnimal() {
  // random index to choose animal type
  var animalIndex = generateRandomIndex(animals.length);
  // get a random animal
  var animal = animals[animalIndex]
  // identify and create animal
  if (animal instanceof PolarBear) return new PolarBear(generateRandomName(), generateRandomAge());
  else if (animal instanceof Lion) return new Lion(generateRandomName(), generateRandomAge());
  else return new Rabbit(generateRandomName(), generateRandomAge());
}

// --- DOM Functionality --- //
$(document).ready(function() {

  // "New Animal" Button Click
  $(".new-animal-button").click(function(){
    // Get Animal
    var animal = generateRandomAnimal();
    // Update Image
    $(".animal-image").attr("src", animal.image);
    // Update Type
    $(".animal-type").html(animal.type);
    // Update Name
    $(".animal-name").html(animal.name);
  });

});
