export function initScroll(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrollToSection(ev) {
    ev.preventDefault()
    const href = ev.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
  
    section.scrollIntoView({
      behavior: "smooth",
      block: "start", 
    })
  }
  
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  })
}
initScroll()


export function animaScroll(){
  

const sections = document.querySelectorAll('.js-scroll')
const windowMetade = window.innerHeight * 0.6
function animaScroll(){
 sections.forEach((section)=>{
  const sectionTop = section.getBoundingClientRect().top - windowMetade
  if(sectionTop < 0){
    section.classList.add('ativo')
  }
 })
}
window.addEventListener('scroll', animaScroll)
}

animaScroll()