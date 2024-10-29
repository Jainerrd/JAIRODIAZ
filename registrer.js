console.log("hellow world")

const username = document.getElementById("name")
const lastName = document.getElementById("lastname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const genero_mujer = document.getElementById("radio-mujer")
const genero_hombre = document.getElementById("radio-hombre");




function registrar(){
    /* console.log(username.value);
    console.log(lastName.value);

    if (genero_hombre.checked){
        console.log(genero_hombre.value)
    }else{
        console.log(genero_mujer.value)
    }

    console.log(email.value);
    console.log(password.value);*/ 

    /* -------------------------------------------*/

    localStorage.setItem("nombre", username.value);
    localStorage.setItem("apellido", lastName.value);
   
    if (genero_hombre.checked){
        localStorage.setItem("genero", genero_hombre.value);
    }else{
        localStorage.setItem("genero", genero_mujer.value);
    }

    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    alert("Ya has sido registrado!")
}

const nombreGuardado = localStorage.getItem("nombre");
const apellidoGuardado = localStorage.getItem("apellido");
const generoGuardado = localStorage.getItem("genero");
const emailGuardado = localStorage.getItem("email");
const passwordGuardado = localStorage.getItem("password");

console.log(nombreGuardado)
console.log(apellidoGuardado)
console.log(generoGuardado)
console.log(emailGuardado)
console.log(passwordGuardado)

