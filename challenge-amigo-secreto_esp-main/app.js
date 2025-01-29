function agregarAmigo(){
    let amigos = [];

    let entrada = document.getElementById('amigo').value;

    if (entrada.trim() === ""){
        alert("Ingrese un nombre")
    }
    else{
        amigos.push(entrada);

        let lista = document.getElementById("listaAmigos");
        let lista2 = document.createElement("li");

        lista2.textContent = entrada;

        lista.appendChild(lista2)

        document.getElementById("amigo").value = "";
    }
    

    
    
}
    
