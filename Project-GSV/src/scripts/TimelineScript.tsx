import {
  useEffect
} from "react";

function TimelineScript() {
  useEffect(() => {
    (function($) {
      $.fn.timeline = function() {
        const selectors = {
          id: $(this),
          item: $(this).find(".timeline-item"),
          activeClass: "timeline-item--active",
          img: ".timeline__img"
        };
        selectors.item.eq(0).addClass(selectors.activeClass);
        selectors.id.css(
          "background-image",
          "url(" +
          selectors.item
          .first()
          .find(selectors.img)
          .attr("src") +
          ")"
        );

        const itemLength = selectors.item.length;
        $(window).scroll(function() {
          let max, min;
          const pos = $(this).scrollTop() ?? 0;
          selectors.item.each(function(i) {
            min = $(this)?.offset()?.top ?? 0;
            max = ($(this)?.height() ?? 0) + ($(this)?.offset()?.top ?? 0);
            if (i == itemLength - 2 && pos > min + ($(this).height() ?? 0) / 2) {
              selectors.item.removeClass(selectors.activeClass);
              selectors.id.css(
                "background-image",
                "url(" +
                selectors.item
                .last()
                .find(selectors.img)
                .attr("src") +
                ")"
              );
              selectors.item.last().addClass(selectors.activeClass);
            } else if (pos <= max - 40 && pos >= min) {
              selectors.id.css(
                "background-image",
                "url(" +
                $(this)
                .find(selectors.img)
                .attr("src") +
                ")"
              );
              selectors.item.removeClass(selectors.activeClass);
              $(this).addClass(selectors.activeClass);
            }
          });
        }
        );
      };
    }
    )(jQuery);


    $("#timeline-1").timeline();
  }, []);
  return null;
}

export default TimelineScript;