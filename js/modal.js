$( ".project-spine" ).each(function(index) {
  $(this).on("click", function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    

  });
});
