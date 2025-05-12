export function tooltip(){

const tooltips = document.querySelectorAll('[data-toltip')

tooltips.forEach((item) => {
  item.addEventListener('mouseover', onMouseover)
})

function onMouseover(event){
 const tootipBox = criarTooltipBox(this)
 onMouseMove.tootipBox = tootipBox
 this.addEventListener('mousemove', onMouseMove)

  function onMouseLeave(){
  tootipBox.remove()
}
  this.addEventListener('mouseleave', onMouseLeave)
}

const onMouseMove = {
  handleEvent(event){
    this.tootipBox.style.top = event.pageY + 20 +'px'
    this.tootipBox.style.left= event.pageX + 20 + 'px'
    this.removeEventListener('mousemove', onMouseMove)
  }
}
function criarTooltipBox(element){
  const tootipBox = document.createElement('div')
  const text = element.getAttribute('aria-label')
  tootipBox.classList.add('tooltip')
  tootipBox.innerText = text
  document.body.appendChild(tootipBox)
  return tootipBox
}
}
