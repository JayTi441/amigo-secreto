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

function imprimirLista(){
        lista.innerHTML = "";

        for (let i = 0; i < amigos.length; i++) {
            let nueva_lista = document.createElement("li");
            nueva_lista.textContent = amigos[i];
            lista.appendChild(nueva_lista)
            
        }

}

function sortearAmigo(){
    if(amigos.length>0){
        let numero = Math.floor(Math.random()*amigos.length);
        console.log(numero)
        for (let i = 0; i < amigos.length; i++) {
            
            if(numero==i){
                amigo_sorteado = amigos[i];
                console.log(amigo_sorteado)
                lista.innerHTML = "";
                res.innerHTML = '<li> El amigo secreto sorteado es: '+amigo_sorteado+'</li>'
                 
            }
            
        }
        
    }
    else{
        alert("Agrega un amigo")
    }
}
    
