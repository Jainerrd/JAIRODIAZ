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

    const newUser = {nombre: name, apellido: lastname, gmail: email, contraseña: password}

    let user = JSON.parse(localStorage.getItem('user')) || [];

    localStorage.setItem('user', JSON.stringify(newUser)) ;  

    user.push(newUser); 

    localStorage.setItem('user', JSON.stringify(user)); 

    alert("Has sido registrado");

    limpiarInputs() ;
}

function limpiarInputs(){
    nameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}




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
