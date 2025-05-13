import { outsideClick } from "./outsideClick.js"

export function dropdown(){
  const dropdownMenus = document.querySelectorAll('[data-dropdown]')

  dropdownMenus.forEach((menu) =>{
    menu.addEventListener('click', handleClick)
    menu.addEventListener('touchstart', handleClick)
  })

  function handleClick(ev){
    ev.preventDefault()
    this.classList.toggle('active')
    outsideClick(this, ['touchstart', 'click'], ()=>{
      this.classList.remove('active')
    })
  }

outsideClick()
}

