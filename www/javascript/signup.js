//recojemos los elementos y los guardamos en variables
const form = document.querySelector(".signup form"),
    continueBtn = form.querySelector(".button input"),
    errorText = form.querySelector(".error-text");

form.onsubmit = (e) => {
    e.preventDefault();
}

//cuando pulsa el boton continuar ejecutamos la funcion
continueBtn.onclick = () => {
    let xhr = new XMLHttpRequest();
    //por el metodo POST de ajax enviamos unos datos y lo recibimos 
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    let data = xhr.response;
                    //si la respuesta es true nos envia a la pagina del usuario
                    if (data === "success") {
                        location.href = "users.php";
                    }
                    //si no es password lo ocultamos y removemos la clase
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