
 let buttons = document.querySelectorAll(".modal-button")
 for(let i = 0; i<buttons.length; i++){

 
let modal = document.querySelector(".modal")
buttons[i].addEventListener("click", (event)=>{
event.preventDefault()
    modal.classList.toggle("hidden")
})
}

