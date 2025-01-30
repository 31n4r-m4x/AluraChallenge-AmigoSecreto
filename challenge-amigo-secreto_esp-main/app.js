let listaAmigos = [];

function agregarAmigo() {
    let amigoNuevo = document.getElementById('amigo').value.trim();
    
    if (amigoNuevo !== "") { // Evitar agregar valores vacíos
        listaAmigos.push(amigoNuevo);
        document.querySelector('#amigo').value = ''; // Limpiar input
        generarLista();
    }
}

function generarLista() {
    let listaUl = document.querySelector('#listaAmigos'); // Aquí le indico el "ul" donde agregarimos los "li"
    listaUl.innerHTML = ""; // Limpiar la lista antes de actualizarla

    listaAmigos.forEach(amigo => { //aqui le indico que por cada elemento en el array va a ejecutar la función
        let li = document.createElement('li'); //Le indico el tipo de elemento que va a crear
        li.textContent = amigo; //el contenido del "li" va a ser igual al elemento del array
        listaUl.appendChild(li); //Lo agregamos al lu
    });
}

function sortearAmigo() {
    let numAmigos = listaAmigos.length;
    let resultadoUl = document.querySelector('#resultado');
    resultadoUl.innerHTML = ""; // Limpiar resultado previo

    if (numAmigos > 0) {
        let aleatorizador = Math.floor(Math.random() * numAmigos); // Índice válido
        let li = document.createElement('li');
        li.textContent = "El amigo elegido es: " + listaAmigos[aleatorizador];
        resultadoUl.appendChild(li);
    } else {
        alert("No hay amigos en la lista")
    }
}
