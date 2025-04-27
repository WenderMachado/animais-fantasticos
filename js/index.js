function initTabnav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')
  tabContent[0].classList.add('ativo')
  
  if(tabMenu.length && tabContent.length){
    function activeTab(index){
      tabContent.forEach((section)=>{
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo')
    }
    
    tabMenu.forEach((itemMenu, index)=>{
      itemMenu.addEventListener('click', () =>{
        activeTab(index)
      })
    })
  }
  
}

initTabnav()

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
initAccordion()

function initScroll(){
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