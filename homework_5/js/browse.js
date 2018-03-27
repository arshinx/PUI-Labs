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



}
