let amigos = "";
let inputNome = document.getElementById('amigo');


let amigosLista = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
    if (nomeAmigo == "") {
        alert("Por favor, insira um amigos");
    } else {
        amigosLista.push(nomeAmigo);
        document.getElementById("amigo").value ="";
        atualizarLista();
    }
}
inputNome.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){
        adicionarAmigo();
   }
 });

function atualizarLista() {
    let listaAtualizada = document.getElementById("listaAmigos");
    listaAtualizada.innerHTML = "";
    for (let i = 0; i < amigosLista.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = amigosLista[i];
        listaAtualizada.appendChild(itemLista);
    }
}

function sortearAmigo() {
   
    let indiceAleatorio = Math.floor(Math.random() * amigosLista.length);
    let nomeSorteado = amigosLista[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `Seu amigo secreto é: ${nomeSorteado}`;

}  

function novoSorteio() {
    amigosLista = [];
    document.getElementById("resultado").innerHTML = "";
    atualizarLista();
}