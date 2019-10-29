$(function (){
  $('#transportation_survey').submit(function(event) {
    event.preventDefault();

    $('#work-responses').show();

      $('input:checkbox[name=work-transportation]:checked').each(function() {
        var transportationMode = $(this).val();
          $('.workInfo').append(transportationMode + '<br>');
      })

      $('input:checkbox[name=fun-transportation]:checked').each(function() {
        var funTransportation = $(this).val();
        $('.funInfo').append(funTransportation + '<br/>');
      });


      $('.survey').hide();



  });
});
















// $(document).ready(function(){
//   $("form#transportation_survey").submit(function(event){
//     event.preventDefault();
//     $("#work-responses").show();
//     $("input:checkbox[name=work-transportation]:checked").each(function(){
//       var workTransportationMode = $(this).val();
//       $('#work-responses').append(workTransportationMode + "<br>");
//     });
//     $('#transportation_survey').hide();
//   });
// });
