// using js file to just enhance userinterface 


// used hide function to just hide and unhide while clicking

// this will work in every footer when u click  "click here to subscribe" text

$(document).ready(function () {
  $('footer form').hide();

  $('footer h3').click(function () {
    $('footer form').slideToggle();
    $('.triangle').toggleClass('rotate');
  });

  $('footer input[type="email"]').click(function (event) {
    event.stopPropagation();
  });

  $('footer button[type="submit"]').click(function (event) {
    event.preventDefault();
    alert('Thanks for subscribing!');
  });
});



// text change when click on "Add to cart"

// this will work in product page when u "add to cart" something

function changeText(buttonId) {
  var button = document.getElementById("btn" + buttonId);
  button.innerHTML = "Selected!";
}
