// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// let listaAmigos = [];

// function agregarAmigo() {
//     let ingresoNombreAmigo = document.getElementById("amigo");
//     let nombre = ingresoNombreAmigo.value;

//     if (nombre === "") {
//         alert("Por favor, inserte un nombre.");
//         return;
//     }

//     listaAmigos.push(nombre);
//     ingresoNombreAmigo.value = "";
//     actualizarLista();
// }

// function actualizarLista() {
//     let lista = document.getElementById("listaAmigos");
//     lista.innerHTML = "";

//     for (let amigo of listaAmigos) {
//         let li = document.createElement("li");
//         li.textContent = amigo;
//         lista.appendChild(li);
//     }
// }

// function sortearAmigo() {
//     if (listaAmigos.length === 0) {
//         alert("No hay amigos para sortear.");
//         return;
//     }
    
//     let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
//     let amigoSorteado = listaAmigos[indiceAleatorio];
    
//     document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
// }

let listaAmigos = [];

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});

function agregarAmigo() {
    let ingresoNombreAmigo = document.getElementById("amigo");
    let nombre = ingresoNombreAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    listaAmigos.push(nombre);
    ingresoNombreAmigo.value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let amigo of listaAmigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];
    
    document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
