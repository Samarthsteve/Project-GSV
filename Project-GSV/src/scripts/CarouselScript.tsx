import {
  useEffect
} from "react"

function CarouselScript() {
  useEffect(() => {
    const nextDom = document.getElementById('next') as HTMLElement;
    const prevDom = document.getElementById('prev') as HTMLElement;

    const carouselDom = document.querySelector('.carousel') as HTMLElement;
    const SliderDom = carouselDom.querySelector('.carousel .list') as HTMLElement;
    const thumbnailBorderDom = document.querySelector('.carousel .thumbnail') as HTMLElement;
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item') as NodeListOf < HTMLElement >;

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    const timeRunning = 2100;
    const timeAutoNext = 5500;

    nextDom.onclick = function() {
      showSlider('next');
    }

    prevDom.onclick = function() {
      showSlider('prev');
    }
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      next.click();
    }, timeAutoNext)
    function showSlider(type: string) {
      const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item') as NodeListOf < HTMLElement >;
      const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item') as NodeListOf < HTMLElement >;

      if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        next.click();
      }, timeAutoNext)
    }
  return(() => {
    clearTimeout(runTimeOut);
    clearTimeout(runNextAuto);
  })
  },
    [])

  return null;
}

export default CarouselScript;