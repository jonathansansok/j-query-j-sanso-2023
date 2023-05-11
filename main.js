/* $('h1').hide(); 
/* $(document).ready(function(){


})
 */

$(function () {
  //$("p").css({'background-color': "red"});
  //$("#segundo").css({'background-color': "green"});
  /*     $(".primero").dblclick(function(){
        $("#segundo").hide();        
         
    })
    $(".primero").mouseleave(function(){
        $('#segundo').show();
        
         
    }) */

  $(".primero").animate({ width: "600px" });
  $(".primero").mouseenter(function () {
    $("#segundo").fadeOut();
  });
  $(".primero").mouseleave(function () {
    $("#segundo").fadeIn();
  });
  $("#btn-hide").click(function () {
    // alert($('#segundo').attr('title'));
    // ($('#segundo').text('hola'))
    //($('#segundo').append('hola <strong>color negrita</strong> a todos'))
    //($('#segundo').prepend('hola <strong>color negrita</strong> a todos'))
    // ($('#segundo').after('<p>Hola <strong>color negrita</strong> a todos</p>'))
    // ($('#segundo').before('<p>Hola <strong>color negrita</strong> a todos</p>'))
    // ($('#segundo').remove('<p>Hola <strong>color negrita</strong> a todos</p>'))
    //($('#btn-show').empty())
    //$("h1").addClass("blue");
   // $("h1").addClass("blue");
    $("h1").toggleClass("blue");

  });
/*   $("#btn-show").click(function () {

    $("h1").removeClass("blue");

  }); */
});
jq