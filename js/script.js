$(document).ready(function() {

  // $("some element").someEvent(function() {
  //   some stuff that happens in event
  // });
  //
  // $("some element").someEvent(function() {
  //   some stuff that happens in event
  // });
  //
  // $("some element").someEvent(function() {
  //   some stuff that happens in event
  // });

  $("form#questions").submit(function(event){
   event.preventDefault();
  //  $ (".match").hide();

  // debugger;
    var ageInput = $("#age").val();
    var genderInput = $("#gender").val();
    var eyesInput = $("#eyes").val();
    var nationalityInput = $("#nationality").val();
    console.log(ageInput);
    console.log(genderInput);
    console.log(eyesInput);
    console.log(nationalityInput);

    if (genderInput === "female") {
      if (ageInput === "under20" && eyesInput === "green" && nationalityInput === "Brazilian") {
        $(".Mike, .Matt, .John").show();
      } else if (ageInput  ==="over50") {
        $(".Obama, .John").show();
      } else if ( ageInput  ==="over40") {
        $('.John').show();
      } else if (ageInput  ==="under30") {
        $('.Matt').show();

      }
      else {
        if (genderInput === "male" && ageInput === "under20" && eyesInput === "blue" && nationalityInput === "American") {
          alert ("Thank you for submitting your profile!");
          $(".Sara, .Barbara").show();
        } else if (genderInput === "male" && ageInput  ==="over50") {
          $(".Michelle, .Angela").show();
        } else if (genderInput === "male" && ageInput  ==="over40") {
          $('.Michelle, .Barbara').show();
        } else if (genderInput === "male" && ageInput  ==="under30") {
          $('.Sara .Angela').show();

      }
    }


  });

});
