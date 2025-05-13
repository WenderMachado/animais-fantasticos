export function dropdown(){

}

const dropdownMenus = document.querySelectorAll('[data-dropdown]')

dropdownMenus.forEach((menu) =>{
  menu.addEventListener('click', handleClick)
  menu.addEventListener('touchstart', handleClick)
})

function handleClick(ev){
  ev.preventDefault()
  this.classList.toggle('active')
}