
// Displays a carousel item with all its properties, tracks by id:index mapping
function showCarouselItem(item, index) {
  var carousel_ul = $(".carousel_ul");
  console.log(carousel_ul)
  console.log(item);
  $("#carousel_ul").append('<li class="carousel_li" id="' + index +'"> <a><img class="carousel-image" src=".' + item.currentState[3] + '"></a><p class="carousel-name">' + item.name + '</p> <p class="carousel-price">' + item.currentState[0] + '</p><p class="carousel-shape">' + item.currentState[1] + '</p><p class="carousel-color">' + item.currentState[2] + '</p></li>');
}

// HTML Loaded
$(document).ready(function() {

  // Generate Carousel Items
  carousel = generateCarouselItems();
  console.log(carousel);
  // Show all Items
  for (var i = 0; i < carousel.length; i++) {
    showCarouselItem(carousel[i], i);
  }

  // Slide left - move last list item before the first item
  $('#carousel_ul li:first').before($('#carousel_ul li:last'));
  // User clicks the image for sliding right
  $('#right_scroll img').click(function() {
    // Get item width (set in css)
    var item_width = $('#carousel_ul li').outerWidth() + 10;
    // New left indent of ul
    var left_indent = parseInt($('#carousel_ul').css('left')) - item_width;

    // Sliding effect
    $('#carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){
      // Place first item after last to continue scroll
      $('#carousel_ul li:last').after($('#carousel_ul li:first'));
      // Left indent set to default -210px
      $('#carousel_ul').css({'left' : '-210px'});
    });
  });

  // Sliding left
  $('#left_scroll img').click(function(){

    // Properties
    var item_width = $('#carousel_ul li').outerWidth() + 10;
    var left_indent = parseInt($('#carousel_ul').css('left')) + item_width;

    $('#carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){
    $('#carousel_ul li:first').before($('#carousel_ul li:last'));

    // Set left indent of ul to default
    $('#carousel_ul').css({'left' : '-210px'});
    });
  });

  $('#0').click(function() {
      // Save and open element with id #
      var index = $(this).parent().parent().parent().attr('id');
      var selectedProduct = carousel[index];
      // Save Cart
      localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
      // Reload Page
      location.reload();
    });

    $('#1').click(function() {
        // Save and open element with id #
        var index = $(this).parent().parent().parent().attr('id');
        var selectedProduct = carousel[index];
        // Save Cart
        localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
        // Reload Page
        location.reload();
      });

      $('#2').click(function() {
          // Save and open element with id #
          var index = $(this).parent().parent().parent().attr('id');
          var selectedProduct = carousel[index];
          // Save Cart
          localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
          // Reload Page
          location.reload();
        });

        $('#3').click(function() {
            // Save and open element with id #
            var index = $(this).parent().parent().parent().attr('id');
            var selectedProduct = carousel[index];
            // Save Cart
            localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
            // Reload Page
            location.reload();
          });

        $('#4').click(function() {
            // Save and open element with id #
            var index = $(this).parent().parent().parent().attr('id');
            var selectedProduct = carousel[index];
            // Save Cart
            localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
            // Reload Page
            location.reload();
          });

          $('#5').click(function() {
              // Save and open element with id #
              var index = $(this).parent().parent().parent().attr('id');
              var selectedProduct = carousel[index];
              // Save Cart
              localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
              // Reload Page
              location.reload();
            });

}); // End Doc Ready
