// --- Product Browsing Page --- //

$(document).ready(function() {

  var pillowSet;
  // If visitor has visited this page before, persist items
  // Note: In case visitor selects product and comes back, they can continue
  if (JSON.parse(localStorage.getItem("pillowSet"))) {
    pillowSet = JSON.parse(localStorage.getItem("pillowSet"));
  } else {
    // Generate Random pillows
    pillowSet = [
      generateRandomPillow(),
      generateRandomPillow(),
      generateRandomPillow()
    ];

    // Save Pillow Set
    localStorage.setItem("pillowSet", JSON.stringify(pillowSet));
  }

  // Show pillows
  // --
  console.log(pillowSet[0]);

  // Left Pillow
  $(".pillow-left-image").attr("src", "../" + pillowSet[0].currentState[3]); // pic
  // name
  $(".pillow-left-name").html(pillowSet[0].name);
  // shape
  $(".pillow-left-shape").html(pillowSet[0].currentState[1]);
  // color
  $(".pillow-left-color").html(pillowSet[0].currentState[2]);
  // price
  $(".pillow-left-price").html("$" + pillowSet[0].currentState[0] + ".00");

}
