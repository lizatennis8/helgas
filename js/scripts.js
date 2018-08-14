$(document).ready(function() {
  $("#fortuneteller").submit (function(event) {
    var witchA = $('.witcha:checked').length;
    var witchB = $('.witchb:checked').length;
    var witchC = $('.witchc:checked').length;
    console.log(witchA);
    console.log(witchB);
    console.log(witchC);
    event.preventDefault();
    $("#witchreveal").show();







    // var animalInput = $("input:checkbox[name=animals]:checked").count();
    // console.log(animalInput);



    // var flyInput = $("input:checkbox[name=fly]:checked").each(function() {
    //
    // var hexInput = $("input:checkbox[name=hex]:checked").each(function()
    // });

  // var valueArray = [animalIngredient, flyInput, hexInput];
  // console.log(valueArray);


    // var witchaInput = $("input:checkbox[name=animals]:checked").val();
    // var witchbInput = $("input:checkbox[name=fly]:checked").val();
    // var witchcInput = $("input:checkbox[name=hex]:checked").val();
    //
    // console.log(witchaInput);
    // console.log(witchbInput);
    // console.log(witchcInput);
    // var animalIngredient = $(this).val();
// var animalInput = ("input:checkbox[name=animals]:checked").length;
// var flyInput = ("input:checkbox[name=fly]:checked").length;
// console.log(hexInput);
//
// var comboLength = animalInput + flyInput + hexInput;

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
