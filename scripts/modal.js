/* let buttons = document.querySelectorAll("[data-control-modal]")

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", ()=>{
       let variavel = buttons[i].getAttribute("data-control-modal")
        document.getElementById(variavel).classList.toggle("show-modal")
    })
}  */

 let buttons = document.querySelectorAll(".modal-button")
 for(let i = 0; i<buttons.length; i++){

 
let modal = document.querySelector(".modal")
buttons[i].addEventListener("click", (event)=>{
event.preventDefault()
    modal.classList.toggle("hidden")
})
}

/* let buttons2= document.querySelector("#button-close")
let modal2 = document.querySelector(".modal")
buttons.addEventListener("click", (event)=>{
    modal2.classList.add("hidden")
})
 */