//recojo datos por medio de quuery llamando a las clases de cada element
const form = document.querySelector(".typing-area"),
    incoming_id = form.querySelector(".incoming_id").value,
    inputField = form.querySelector(".input-field"),
    sendBtn = form.querySelector("button"),
    chatBox = document.querySelector(".chat-box");


form.onsubmit = (e) => {
    e.preventDefault();
}

//cada vez que escribamos en el imput mirar una condicion
inputField.focus();
inputField.onkeyup = () => {
    //si es diferente de nullu o vacio añadimos un clases activa
    if (inputField.value != "") {
        sendBtn.classList.add("active");
    }
    //removemos la clase activa
    else {
        sendBtn.classList.remove("active");
    }
}

//cuando pulsa el boton enviar
sendBtn.onclick = () => {

    //por medio de ajax con el metodo post, mandamos el mensaje
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/insert-chat.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                inputField.value = "";
                scrollToBottom();
            }
        }
    }

    //mandamos el mensaje al php 
    let formData = new FormData(form);
    xhr.send(formData);
}

//cada vez que el raton pase por encima del contenedor añade una clase active
chatBox.onmouseenter = () => {
        chatBox.classList.add("active");
    }
    //cuando el raton sale del contenedor eliminamos la clase
chatBox.onmouseleave = () => {
    chatBox.classList.remove("active");
}


//cada medio segundo se ejecutada esta funcion
setInterval(() => {
    let xhr = new XMLHttpRequest();
    //por medio de ajax recibimos un mensaje y a las ve lo enviamos por medio de POST
    xhr.open("POST", "php/get-chat.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                //recibimos la respuesta
                let data = xhr.response;
                //y la añadimo al chat
                chatBox.innerHTML = data;
                if (!chatBox.classList.contains("active")) {
                    //llamamos a la funcion
                    scrollToBottom();
                }
            }
        }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //mandamos el mensaje
    xhr.send("incoming_id=" + incoming_id);
}, 500);


//funcion que hace scroll mostrando el ultimo mensaje
function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
}