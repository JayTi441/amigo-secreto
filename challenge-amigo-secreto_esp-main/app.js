let amigos = [];

let lista = document.getElementById("listaAmigos");
let res = document.getElementById("resultado");

function agregarAmigo(){
    let entrada = document.getElementById('amigo').value;
    if (entrada.trim() === ""){
        alert("Por favor, inserte un nombre")
    }
    else{
        amigos.push(entrada);
        
        imprimirLista();
        document.getElementById("amigo").value = "";
        
    }   
}

    
