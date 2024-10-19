import {useEffect} from "react";

function GalleryScript() {
  useEffect(() => {
    var $galleryContainer = $('.gallery').isotope({
		itemSelector: '.item',
  	layoutMode: 'masonry'
	})

	$('.button-group .button').on('click', function(){
		$('.button-group .button').removeClass('active');
		$(this).addClass('active');

		var value = $(this).attr('data-filter');
		$galleryContainer.isotope({
			filter: value 
		})
	})
  }, []);
  
   return null;
}

export default GalleryScript;