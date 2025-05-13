 export function outsideClick(element, events, callback){
  const html = document.documentElement
  const outside = 'data-outside'

  if(!element.hasAttribute(outside)){
    events.forEach(userEvent =>{
      html.addEventListener(userEvent, handleOutsideClick)

    })
    element.setAttribute(outside, '')

  }

  function handleOutsideClick(ev){
    if(!element.contains(ev.target)){
      element.removeAttribute(outside)
       events.forEach(userEvent =>{
      html.removeEventListener(userEvent, handleOutsideClick)

    })
      callback()
    }
  }
}