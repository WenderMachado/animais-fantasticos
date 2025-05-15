export default function initFuncionamento(){
  
}

const funcionamento = document.querySelector('[data-semana]')
const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
const horariosSemana = funcionamento.dataset.horario.split(',').map(Number)

console.log(horariosSemana)

const dataAgora = new Date()
const diaAgora = dataAgora.getDay()
const horarioAgora = dataAgora.getHours()

const semanaAberta = diasSemana.indexOf(diaAgora) !== -1

const horarioAberto = (horarioAgora >= horariosSemana[0] &&  horarioAgora < horariosSemana[1])

if(semanaAberta && horarioAberto){
  funcionamento.classList.add('aberto')
}
