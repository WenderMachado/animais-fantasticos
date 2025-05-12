export function initModal(){
const btnAbrir = document.querySelector('[data-modal="abrir"')
const btnFechar = document.querySelector('[data-modal="fechar"')
const containerModal = document.querySelector('[data-modal="container"')

function abrirModal(event){
event.preventDefault()
containerModal.classList.add('ativo')

}

function fecharModal(event){
event.preventDefault()
containerModal.classList.remove('ativo')
}
function cliqueForaModal(event){
  if(event.target === this){
  fecharModal(event)
  }
 
}

btnAbrir.addEventListener('click', abrirModal)
btnFechar.addEventListener('click', fecharModal)
containerModal.addEventListener('click', cliqueForaModal)
}
