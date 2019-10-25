$(document).ready( function(){
  $(window).scroll( function(){
    var scroling = $(window).scrollTop()

    if(scroling>250){
      $(".fa-arrow-alt-circle-up").addClass("show")
    }
    else{
      $(".fa-arrow-alt-circle-up").removeClass("show")
    }
  } )

  $(".fa-arrow-alt-circle-up").click( function(){
      $("body,html").animate({
          scrollTop : 0
      })
  })

  $('.nav-item').on('click' , function(){
    $('.dropdown').toggle()
  })

  var count = 1;
  $(".add").click( function(){
    $('.count').append(count++)
  })

} )