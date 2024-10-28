import { useEffect } from 'react'

function AlumniSliderScript() {
  useEffect(() => {
   const slider = document.querySelector('.slider .list') as HTMLElement;
const items = document.querySelectorAll('.slider .list .item') as NodeListOf<HTMLElement>;
const next = document.getElementById('next') as HTMLElement;
const prev = document.getElementById('prev') as HTMLElement;
const dots = document.querySelectorAll('.slider .dots li') as NodeListOf<Element>;

const lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    const last_active_dot = document.querySelector('.slider .dots li.active') as HTMLElement;
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);


}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function() {
    reloadSlider();
};
  });

return null;
}

export default AlumniSliderScript;