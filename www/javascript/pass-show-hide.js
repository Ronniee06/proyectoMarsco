//recojemos los elementos y los guardamos en variables
const pswrdField = document.querySelector(".form input[type='password']"),
    toggleIcon = document.querySelector(".form .field i");

//cada vez que ejecutan el icono ejecuta una funcion
toggleIcon.onclick = () => {
    //si el tipo es password entonces mostramos la contraseña
    if (pswrdField.type === "password") {
        pswrdField.type = "text";
        toggleIcon.classList.add("active");
    }
    //si no es password lo ocultamos y removemos la clase
    else {
        pswrdField.type = "password";
        toggleIcon.classList.remove("active");
    }
}