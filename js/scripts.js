$(function() {
  $('#animalSelector form').submit(function(event) {
    var animal = $('#animal').val().toLowerCase();
    if (animal === "turtles"){
      $('#quiz').hide();
      $('#turtles').show();
      $('#snakes').hide();
      $('#insects').hide();
    } else {
      $('#quiz').hide();
      $('#snakes').show();
      $('#turtles').hide();
      $('#insects').hide();
    }
    event.preventDefault();
  });

  $('.secret-btn').click(function(){
    $('#quiz').hide();
    $('#insects').show();
    $('#turtles').hide();
    $('#snakes').hide();
  });

  $('.quiz').click(function() {
    $('#quiz').show();
    $('#insects').hide();
    $('#turtles').hide();
    $('#snakes').hide();
  })

  // ================================ Quiz Business Logic ======================
  $('#quiz form').submit(function(event){
    var favoriteThings = parseInt($("input:radio[name=favoriteThings]:checked").val());
    var beverage = parseInt($("input:radio[name=beverage]:checked").val());
    var actor = parseInt($("input:radio[name=actor]:checked").val());
    var jetFuel = parseInt($("input:radio[name=jetFuel]:checked").val());
    var dogsOut = parseInt($("input:radio[name=dogsOut]:checked").val());
    var duckHorse = parseInt($("input:radio[name=duckHorse]:checked").val());
    var sum = favoriteThings + beverage + actor + jetFuel + dogsOut;

    event.preventDefault();
    // ================================ Quiz Front End Logic ======================
    if(sum){
      if(sum < 11 || beverage === 1) {
        window.open("snake.html", 'snakeWindow','width=400, height=400');
      } else {
        window.open("turtle.html", 'turtleWindow','width=400, height=600')
      }
    }
    else {
      alert('Please fill out all of the questions. Thank you.');
    }
    if(!favoriteThings) {
      $('#favoriteThings').addClass('has-error');
    }
    if(!beverage) {
      $('#beverage').addClass('has-error');
    }
    if(!actor) {
      $('#actor').addClass('has-error');
    }
    if(!jetFuel) {
      $('#jetFuel').addClass('has-error');
    }
    if(!dogsOut) {
      $('#dogsOut').addClass('has-error');
    }
    if(!duckHorse) {
      $('#duckHorse').addClass('has-error');
    }
  });

  $('#dogsOut3').click(function(){
    $('.liar').show();
    $('#dogsOut3').attr('disabled', 'true');
  });
});
