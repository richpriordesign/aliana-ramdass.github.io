$(document).ready(function(){
	
  //Hide desktop navbar

  //Display drawer menu
  	//On Click Event that toggles menu in and out of view
	  $('.drawer').on('click', (function(){
	    $(this).toggleClass('slide-over'); //Moves drawer menu
	    $('.mobile-nav').toggleClass('on'); //Slides out menu
	    $('.navbar').toggleClass('fixed');

	    //Disable scrolling website
	    $('.container').toggleClass('disable');
	    $('.container').toggleClass('no-scroll');

	    //Toggle color overlay
	    $('.overlay').toggleClass('overlay-on');
	  }));

	//Disable and turn off mobile menu and settings on window resize
	  $(window).resize(function(){
	  	var viewportWidth = $(window).width();
		if (viewportWidth > 1024){
		  $('.drawer').removeClass('slide-over');
		  $('.mobile-nav').removeClass('on');
		  $('.container').removeClass('disable');
	      $('.overlay').removeClass('overlay-on');
	      $('.container').removeClass('no-scroll');
	      $('.navbar').removeClass('fixed');
		}
	  });
	
	//Disable and turn off mobile menu and settings on navigation click
	  $('.mobile-nav').on('click', (function(){
	  	  //if statement checks if the drawer menu is already activated. It is activated if it has the class "slide-over" added on line 8
	  	  if ( $('.drawer').hasClass('slide-over') ){
	  	  	//if it has the class slide-over it removes it and all the settings when the menu is on
		    $('.drawer').removeClass('slide-over');
		    $('.mobile-nav').removeClass('on');
		    $('.container').removeClass('disable');
	        $('.overlay').removeClass('overlay-on');
	        $('.container').removeClass('no-scroll');
	        $('.navbar').removeClass('fixed');
	      }else{
	      };
	  }));
	   
	
  //Add and Remove top and bottom drawer bars on click


});