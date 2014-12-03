var hoverOutTimer = null;
 
jQuery(document).ready(function($) { 
	'use strict';
	$(".menulink a").click(function() { 
	  	jQuery("nav").stop(true, true).fadeToggle('fast');   
	});	
	resize_intro(); 
	jQuery(".left section").stop(true, true).fadeIn('fast');
	jQuery(".right section").stop(true, true).fadeIn('fast'); 
});

jQuery(window).resize(function () { 
	'use strict';
	resize_intro(); 
});

function resize_intro(){
	page_height =  jQuery(window).height();  
		right_height = jQuery('.right section').height() + 40;
		left_height = jQuery('.left section').height() + 40;
		
 		if(left_height < page_height) {		
 				
			jQuery(".left").css('height',page_height+'px'); 
			left_content_margin = ((page_height - left_height) / 2) - 30;
			jQuery(".left section").css('margin-top',left_content_margin+'px');       
							
 		} 
		
 		if(right_height < page_height) {		       
			
			if(jQuery(window).width() > 800) {  
				right_content_margin = (page_height - right_height) / 2;
				jQuery(".right section").css('margin-top',right_content_margin+'px');  			 
			}
							
 		} 
}
