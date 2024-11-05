const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastname");
const generoInput = document.getElementById("opcion");
const emailInput  = document.getElementById("email");
const passwordInput = document.getElementById("password");
const botonRegistrar = document.getElementById("submit");





function registrar(){
    /* Event.preventDefault(); */

    const name = nameInput.value;
    const lastname = lastNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    const newUser = {name, lastname, email, password}

    let user = JSON.parse(localStorage.getItem('user')) || [];  // con esto obtengo los usuarios existentes

    localStorage.setItem('user', JSON.stringify(newUser)) ;  // guardo a new user

    user.push(newUser); // agrego el nuevo usuario al arreglo

    localStorage.setItem('user', JSON.stringify(user)); // almaceno el arreglo actualizado en el localStorage

    alert("Has sido registrado")

    limpiarInputs()
}

function limpiarInputs(){
    nameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}

const validarEmail = document.getElementById("validarEmail")
const validarPassword = document.getElementById("validarPassword")

function validarInfo(){
    console.log(validarEmail.value)
    console.log(validarPassword.value)

    if()
}


