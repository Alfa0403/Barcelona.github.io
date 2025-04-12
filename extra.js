const formRegister = document.getElementById('Formulario')
const NombreJs = document.getElementById('Name')
const CorreoJs = document.getElementById('Email')
const ContraJs = document.getElementById('Password')
const ContraConfirm = document.getElementById('PasswordConfirm')
    
formRegister.addEventListener("submit", e=>{
    e.preventDefault()+
    enviarFormulario();

    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let valid = true;

    if(NombreJs.value.length < 10){
        alert("El nombre es demasiado corto")
        valid = false;
    }
    if(!regexEmail.test(CorreoJs.value)){
        alert("El Email debe contener un @ y .com")
        valid = false; 
    }
    if(ContraJs.value.length < 8){
        alert("La contraseña debe tener mas de 8 caracteres.")
        valid = false;
    }
    if(ContraJs.value != ContraConfirm.value){
        alert("Las contraseñas no coinciden")
        valid = false;
    }

    if(NombreJs.value === "" || CorreoJs.value === "" || ContraJs.value === "" || ContraConfirm.value === ""){
        alert("Por favor llena todos los campos");
        valid = false;
    }
    if(valid){
        window.location.href = "Inicio.html";
    }
})

function enviarFormulario(){
    console.log("Formulario enviado")
}
