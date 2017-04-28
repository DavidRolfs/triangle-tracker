// back-end
var compare = function(s1, s2, s3){
  if(!s1 || !s2 || !s3){
    alert("enter numbers!!");
  } else{
      if(s1+s2 <= s3 || s2+s3 <= s1 || s1+s3 <= s2){
        return ("not a triangle");
      } else{
          if(s1 === s2 && s1 === s3){
            return ("Equilateral");
          } else if(s1===s2 || s1===s3 || s2===s3){
            return ("Isosceles");
          } else if(s1 !==s2 && s1 !== s3 && s2 !== s3){
            return ("Scalene");
          }
      }
    }
}


//front-end
$(document).ready(function(){
  $("form#triangle").submit(function(event){
    event.preventDefault()
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    $("#triangleType").text(compare(side1, side2, side3));
  });
})
