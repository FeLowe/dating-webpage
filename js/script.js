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

    if (genderInput === "female" && ageInput === "under20" && eyesInput === "green" && nationalityInput === "Brazilian") {
      alert ("Thank you for submitting your profile!");
      $(".Mike, .Matt, .John").show();
    } else if (genderInput === "female" && ageInput  ==="over50") {
      $(".Obama, .John").show();
      alert ("Thank you for submitting your profile!");
    } else if (genderInput === "female" && ageInput  ==="over40") {
      $('.John').show();
      alert ("Thank you for submitting your profile!");
    } else if (genderInput === "female" && ageInput  ==="under30") {
      $('.Matt').show();
      alert ("Thank you for submitting your profile!");
    }
  });

});
