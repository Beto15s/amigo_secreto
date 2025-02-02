// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

listaAmigos =[];

function agregarAmigo() {
    let nuevo_amigo = document.getElementById('amigo').value;

    if(nuevo_amigo == ""){
        alert("Por favor, inserte un nombre.")
    }else{
        listaAmigos.push(nuevo_amigo);
    }
    
    
    limpiarCaja();
    actualizarListaAmigos();
    return;
}

function actualizarListaAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML =  "";
    capirotada = "";
    for(let i=0;i < listaAmigos.length;i++){
        capirotada = capirotada + `<li> ${listaAmigos[i]} </li>`;
    }
    lista.innerHTML =  capirotada;
    return;
}

function sortearAmigo(){
    
    if(listaAmigos.length == 0){
        alert("Por favor, agrege al menos un nombre a la lista.");
        return;
    }else{
        let ganador = document.getElementById("resultado");
        let sorteo = parseInt(Math.floor(Math.random()*listaAmigos.length));
        ganador.innerHTML =  `${listaAmigos[sorteo]}`;
        return;
    }

}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}