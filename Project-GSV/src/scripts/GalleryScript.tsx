import {
  useEffect
} from "react";

function GalleryScript() {
  useEffect(() => {
    const $galleryContainer = ($('.gallery') as JQuery < HTMLElement >).isotope({
      itemSelector: '.item',
      layoutMode: 'masonry'
    })

    $('.button-group .button').on('click', function() {
      $('.button-group .button').removeClass('active');
      $(this).addClass('active');

      const value = $(this).attr('data-filter');
      $galleryContainer.isotope({
        filter: value
      })
    })
    
  }, []);

  return null;
}

export default GalleryScript;