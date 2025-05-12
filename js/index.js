import { initScroll, animaScroll } from './scroll-suave.js';
import { initTabnav } from './animacoes.js';
import { initModal } from './modal.js';
import { tooltip } from './tooltip.js';

function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt')
  accordionList[0].classList.add('ativo')
  accordionList[0].nextElementSibling.classList.add('ativo')
  
  function activeAccordion(){
    this.classList.toggle('ativo')
   this.nextElementSibling.classList.toggle('ativo')
  }
  
  accordionList.forEach((item) =>{
    item.addEventListener('click', activeAccordion)
  })
}
document.addEventListener('DOMContentLoaded', () => {
  initAccordion();
  initTabnav();
  animaScroll();
  initScroll();
  initModal();
  tooltip();
})
