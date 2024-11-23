const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastname");
const generoInput = document.getElementById("opcion");
const emailInput  = document.getElementById("email");
const passwordInput = document.getElementById("password");
const botonRegistrar = document.getElementById("submit");


// REGISTRAR USUARIOS


function registrar(){
    /* Event.preventDefault(); */

    // con esto obtengo los valores de los inputs 
    const name = nameInput.value;
    const lastname = lastNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    // aqui hago un objeto del usuario
    const newUser = {nombre: name, apellido: lastname, gmail: email, contraseña: password}

    // obtengo los usuarios existentes del almacenamiento local o crear un arreglo vacío
    let user = JSON.parse(localStorage.getItem('user')) || [];

    // aqui almaceno el usuario en el local storage
    localStorage.setItem('user', JSON.stringify(newUser)) ;  

    // aqui lo que hago es guardarlo en un arreglo
    user.push(newUser); 

    // hago lo mismo, pero esta vez guardo es el arreglo en el local storage
    localStorage.setItem('user', JSON.stringify(user)); 

    // esto es un mensaje de confirmación
    alert("Has sido registrado");

    limpiarInputs() ;
}

function limpiarInputs(){
    nameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}


// INICIO DE SESION DE USUARIOS


const validarEmail = document.getElementById("validarEmail");
const validarPassword = document.getElementById("validarPassword");

function validarInfo(){

    let user = JSON.parse(localStorage.getItem('user'));

    for (let i = 0; i < user.length; i++) {
        if(validarEmail.value === user[i].gmail && validarPassword.value === user[i].contraseña){
            alert("has iniciado sesion")
        }else{
            alert("datos incorrectos")
        }
            
    }
}


/*
// con esto obtengo los usuarios existentes
// guardo a new user
// agrego el nuevo usuario al arreglo
// almaceno el arreglo actualizado en el localStorage
*/
