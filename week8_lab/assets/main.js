
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

// Ability of (all) Lion(s)
Lion.prototype.roar = function() {
  console.log("Roooaaarrr!");
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

  // Get Animal
  var animal = generateRandomAnimal();

  // Current State (save, none)
  localStorage.setItem("currentState", "none");

  // Show Animal
  var showAnimal = function(){
    if (localStorage.getItem("currentState") == "none") {
      // Animal DNE
      animal = generateRandomAnimal();
      // Age adjustment
      if (animal.age === 0) animal.age = 0.5;
      // Update Image
      $(".animal-image").attr("src", animal.image);
      // Update Type
      $(".animal-type").html(animal.type);
      // Update Name
      $(".animal-name").html(animal.name);
      // Update Age
      $(".animal-age").html(animal.age + " years old");
    }
  };

  // Show Animal the each time user visits
  showAnimal();

  // "New Animal" Button Click
  $(".new-animal-button").click(function() {
    // Show a new animal, if save state = "none"
    showAnimal();
  });

  // Save Animal Button Click
  $("#saveButton").click(function(){

    if (localStorage.getItem("currentState") == "save") {
      // Clear Animal
      localStorage.setItem("savedAnimal", null);
      // Set text to "Save"
      $("#saveButton").html("Save");
      // Current State (none)
      localStorage.setItem("currentState", "none");
      // Log "Cleared"
      console.log("cleared");

    } else if (localStorage.getItem("currentState") == "none") {
      // Save Animal
      localStorage.setItem("savedAnimal", JSON.stringify(animal));
      // Set text to "Clear" (now there should be an option to clear the saved animal)
      $("#saveButton").html("Clear");
      // Current State (save)
      localStorage.setItem("currentState", "save");
      // Show (keep showing) the saved animal
      showAnimal(); // testing
      // Log "Cleared"
      console.log("saved:");
      console.log(JSON.parse(localStorage.getItem("savedAnimal")));
    }
  });
});
