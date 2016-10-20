$(function() {
  $('#animalSelector form').submit(function(event) {
    var animal = $('#animal').val().toLowerCase();
    if (animal === "turtles"){
      $('#turtles').show();
      $('#snakes').hide();
      $('#insects').hide();
    } else {
      $('#snakes').show();
      $('#turtles').hide();
      $('#insects').hide();
    }
    event.preventDefault();
  });

  $('.secret-btn').click(function(){
    $('#insects').show();
    $('#turtles').hide();
    $('#snakes').hide();
  })
})
