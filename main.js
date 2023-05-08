/* $('h1').hide(); 
/* $(document).ready(function(){


})
 */


$(function(){
    //$("p").css({'background-color': "red"});
    //$("#segundo").css({'background-color': "green"});
/*     $(".primero").dblclick(function(){
        $("#segundo").hide();        
         
    })
    $(".primero").mouseleave(function(){
        $('#segundo').show();
        
         
    }) */

    $('.primero').animate({width: '600px'})
    $(".primero").mouseenter(function(){
        $("#segundo").fadeOut();        
         
    })
    $(".primero").mouseleave(function(){
        $('#segundo').fadeIn();
        
         
    })
    $('#btn-hide').click(function(){
        alert($('#segundo').attr('title'));


    }
    )
})