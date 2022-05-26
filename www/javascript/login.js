//recojemos datos de elemos y las guardamos en variables
const form = document.querySelector(".login form"),
    continueBtn = form.querySelector(".button input"),
    errorText = form.querySelector(".error-text");

form.onsubmit = (e) => {
    e.preventDefault();
}

//cuando pulsa el boton continuar ejecutamos la funcion
continueBtn.onclick = () => {
    let xhr = new XMLHttpRequest();
    //por el metodo POST de ajax enviamos unos datos y lo recibimos 
    xhr.open("POST", "php/login.php", true);
    xhr.onload = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    //si la respuesta es true nos envia a la pagina del usuario
                    let data = xhr.response;
                    if (data === "success") {
                        location.href = "users.php";
                    }
                    //si hay un error mandamos un mensaje por pantalla de error
                    else {
                        errorText.style.display = "block";
                        errorText.textContent = data;
                    }
                }
            }
        }
        //enviamos los datos del formulario al PHP
    let formData = new FormData(form);
    xhr.send(formData);
}