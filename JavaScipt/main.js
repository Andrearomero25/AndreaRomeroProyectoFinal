// FONDO CAMBIA DE COLOR EN MODO RESPORSIVE

setInterval(function()
{document.querySelector("body").classList.toggle("celeste")},
1500)
// console.log(1)

// VALIDACION DE FORMULARIO

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const enviar= document.getElementById("enviar");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.ariaValueMax.length < 6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    // console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valido <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }

}) 

// MODO CLARO/OSCURO click()callback

const checkbox = document.getElementById("checkbox")
checkbox.onclick = () => {
    const body = document.querySelector("body")
    if(checkbox.checked){
        body.style.backgroundColor = "black"
        body.style.color = "chocolate"  
    } else {
        body.style.backgroundColor = "whitesmoke"
        body.style.color = "black"
    }
}