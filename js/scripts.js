$(document).ready(function(){
  $("form#triangle").submit(function(){
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());



    if(side1+side2 <= side3 || side2+side3 <= side1 || side1+side3 <= side2){
      alert("not a triangle");
    } else{
        if(side1 === side2 && side1 === side3){
          alert("Equilateral")
        }
        else if(side1===side2 || side1===side3 || side2===side3){
          alert("Isosceles");
        }
        else if(side1 !==side2 && side1 !== side3 && side2 !== side3){
          alert("Scalene")
        }
      }

  });
})
