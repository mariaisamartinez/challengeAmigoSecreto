// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function verificarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    
    if (nombreAmigo === '') {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreAmigo);
    }
    console.log(nombreAmigo);
}

function limpiarAmigo() {
    document.getElementById('amigo').value = '';
}