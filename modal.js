$( ".project-spine" ).each(function(index) {
  $(this).on("click", function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

  });
});


$( ".close" ).each(function(index) {
  $(this).on("click", function(){
    $(this).parent('.project-spine.active').removeClass('active');
  });
});