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
  });

  // ================================ Quiz Business Logic ======================
  $('#quiz form').submit(function(event){
    var favoriteThings = parseInt($("input:radio[name=favoriteThings]:checked").val());
    var beverage = parseInt($("input:radio[name=beverage]:checked").val());
    var actor = parseInt($("input:radio[name=actor]:checked").val());
    var jetFuel = parseInt($("input:radio[name=jetFuel]:checked").val());
    var dogsOut = parseInt($("input:radio[name=dogsOut]:checked").val());
    var sum = favoriteThings + beverage + actor + jetFuel + dogsOut;

    if(sum < 7 || beverage === 0) {
      window.open()
    } else if (sum >= 7) {
      window.open()
    } else {

    }

    event.preventDefault();
  })
})
