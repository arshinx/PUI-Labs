// Creating products objects here
var products = {
    "cinnamonBuns": [
        {
            "name": "Birthday Cake",
            "price": "$2.00",
            "img": "img/birthday-cake.jpg",
            "id": 0
        },
        {
            "name": "Maple Walnut",
            "price": "$3.00",
            "img": "img/lavendar.jpg",
            "id": 1
        },
        {
            "name": "Lavendar cinnamon buns",
            "price": "$2.50",
            "img": "img/maple-walnut.jpg",
            "id": 2
        }
    ]
}


$(document).ready(function(){
    // -- Changing selection template --
    // get the HTML template using jQuery
    var source = $("#selection-template").html();
    // compile the template into a function
    var template = Handlebars.compile(source);
    // create new HTML using our data
    var newHTML = template(products);
    // add the new HTML to the page
    $("#product-selection-container").append(newHTML);

    // TODO (Step 7): add function call for 1st update to detail-template


    // TODO: (Step 8): add code below for changing product details on click


});

// Function for updating detail-template based on id
function updateProductDetail(id) {
  // get the HTML template using jQuery
  var source = $("#detail-template").html();
  // compile the template into a function
  var template = Handlebars.compile(source);
  // create new HTML using our data
  var newHTML = template(products.cinnamonBuns[id]);
  // add the new HTML to the page
  $("#product-detail-container").append(newHTML);
}
