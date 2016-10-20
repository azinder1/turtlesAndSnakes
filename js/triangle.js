//================= Business Logic =================================
//Function for determining if three lengths can make a trianlge and what type
function isTriangle(number1, number2, number3){
  var number12 = number1 + number2;
  var number13 = number1 + number3;
  var number23 = number2 + number3;
  //for non-trianglnumbere checks all sides are numbers
  if (isNaN(number1) || isNaN(number2) || isNaN(number3)){
    return "Not a triangle?";
  }
  //checks one side not too large
  else if (number12 <= number3 || number13 <= number2 || number23<= number1) {
    return "Not a triangle?";
  }
  //for Equilateral triangle
  else {
    if(number1 === number2 && number2 === number3) {
      return "Equilateral triangle";
    }
    //for Isosceles triangle
    else if(number1 === number2 || number1 === number3 || number2 === number3) {
      return 'Isosceles triangle';
    }
    //for Scalene triangle
    else {
      return 'Scalene triangle';
    }
  }
  return answer;
};

function trianglePicture(string) {
  if(string === "Not a triangle?") {
    return "img/illum.png";
  }
  else if (string === "Equilateral triangle") {
    return "img/equil.svg";
  }
  else if(string === "Isosceles triangle")
  {
    return "img/isos.png";
  }
  else {
    return "img/scalene.png"
  }
};

$(function() {
  $('.row form').submit(function(event) {
//================= UI =================================
    var side1 = parseFloat($('input#sideOne').val());;
    var side2 = parseFloat($('input#sideTwo').val());
    var side3 = parseFloat($('input#sideThree').val());
    $('#triangleAnswer').text(isTriangle(side1, side2, side3));
    event.preventDefault();
    $('#triangleImg').attr({
      src: trianglePicture(isTriangle(side1, side2, side3)),
      width: '400px',
      height: '400px'
    });
  });
});
