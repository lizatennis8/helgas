$(document).ready(function() {
  $("#fortuneteller").submit (function(event) {
    var witchA = $('.winnie:checked').length;
    var witchB = $('.mary:checked').length;
    var witchC = $('.sarah:checked').length;
    console.log(witchA);
    console.log(witchB);
    console.log(witchC);
    event.preventDefault();

    if (witchA > witchB && witchA > witchC) {
      $("#winnie").show();
    } else if (witchB > witchA && witchB > witchC) {
      $("#mary").show();
    }  else {
      $("#sarah").show();
    }
  });


});





















//
//
//
//
//
//
// // For Liza: (to show results on next page)
//
//
// $(document).ready(function() {
//   $("#fortuneteller").submit (function(event) {
//     event.preventDefault();
//   $("#witchreveal").show();
//   $("input:checkbox[name=animals]:checked").each(function() {
//     var animalIngredient = $(this).val();
//     $("#witchreveal").append("<p>" + animalIngredient + "</p>");
//   });
//
//
//   });
// });
