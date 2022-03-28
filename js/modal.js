$( ".project-spine" ).each(function(index) {
  $(this).on("click", function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });
});


$("#fleur").mouseenter(
   function() {
   	$('#fleur-text').html('Fleurine Brijker');  
   }
);

$("#fleur").mouseleave(
	function() {
   	 $('#fleur-text').html('Van Zee Tot Land');
   	}
);