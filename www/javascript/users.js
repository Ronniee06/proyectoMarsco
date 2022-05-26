//recojemos los elementos y los guardamos en variables
const searchBar = document.querySelector(".search input"),
    searchIcon = document.querySelector(".search button"),
    usersList = document.querySelector(".users-list");


//cuando pulse al icono de busqueda
searchIcon.onclick = () => {
    //acticamos la barra de busqueda
    searchBar.classList.toggle("show");
    //activamos la classe de la barra de busqueda
    searchIcon.classList.toggle("active");
    searchBar.focus();
    //si se ha activado la clase entonces borramos
    //los valores imput
    if (searchBar.classList.contains("active")) {
        searchBar.value = "";
        searchBar.classList.remove("active");
    }
}

//cuando pulamos buscar
searchBar.onkeyup = () => {
        //recojemos el valor del imput de busqueda en una variable
        let searchTerm = searchBar.value;
        //si no esta vacia añadimos una clase activa
        if (searchTerm != "") {
            searchBar.classList.add("active");
        }
        //si esta vacia elimina la clase activa
        else {
            searchBar.classList.remove("active");
        }

        //por metodo post de ajax enviamos datos y recibimos un resultado
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "php/search.php", true);
        xhr.onload = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        //guardamos la respuesta y la mostramos en pantalla del usuario
                        let data = xhr.response;
                        usersList.innerHTML = data;
                    }
                }
            }
            //enviamos la respuesta al fichero php
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("searchTerm=" + searchTerm);
    }
    //cada medio segundo mostramos el mensaje
setInterval(() => {
    let xhr = new XMLHttpRequest();
    //recibimos un mensaje por metodo GET de ajax
    xhr.open("GET", "php/users.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                //recibimos la respuesya
                let data = xhr.response;
                //si la clase no esta activa
                if (!searchBar.classList.contains("active")) {
                    //mostramos el resultado  
                    usersList.innerHTML = data;
                }
            }
        }
    }
    xhr.send();
}, 500);