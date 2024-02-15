let textoIngresado = "";
let listaTextoIngresado = [];
let textoCambiar = "";
let textoCambiado = "";
let nuevoTexto = "";


function Encriptar () {
    textoIngresado = document.getElementById('texto-ingresado').value;
    listaTextoIngresado = textoIngresado.split(" ");
    
    listaTextoIngresado.forEach(element => {
        textoCambiar = element;
        textoCambiado ="";
        for (let i = 0; i < textoCambiar.length; i++) {
            switch (textoCambiar.charAt(i)) {
                case "a":
                    textoCambiado = textoCambiado+"ai";
                    break;
                case "e":
                    textoCambiado = textoCambiado+"enter";
                    break;
                case "i":
                    textoCambiado = textoCambiado+"imes";
                    break;
                case "o":
                    textoCambiado = textoCambiado+"ober";
                    break;
                case "u":
                    textoCambiado = textoCambiado+"ufat";
                    break;
                default:
                    textoCambiado = textoCambiado+textoCambiar.charAt(i);
                    break;
            }
            
        }
        nuevoTexto = nuevoTexto + " " + textoCambiado;
    });
    document.querySelector('#texto-convertido').innerHTML = nuevoTexto.trim();
    console.log(nuevoTexto.trim());
    condicionesIniciales();


}

function Desencriptar () {
    textoIngresado = document.getElementById('texto-ingresado').value;
    listaTextoIngresado = textoIngresado.split(" ");
    
    listaTextoIngresado.forEach(element => {
        textoCambiar = element;
        textoCambiado ="";
        for (let i = 0; i < textoCambiar.length; i++) {
            textoCambiado = textoCambiado+textoCambiar.charAt(i);
            switch (textoCambiar.charAt(i)) {
                case "a":
                    i += 1;
                    break;
                case "e":
                    i += 4;
                    break;
                case "i":
                    i += 3;
                    break;
                case "o":
                    i += 3;
                    break;
                case "u":
                    i += 3;
                    break;
                default:
                    break;
            }
            
            
        }
        nuevoTexto = nuevoTexto + " " + textoCambiado;
    });
    document.querySelector('#texto-convertido').innerHTML = nuevoTexto.trim();
    console.log(nuevoTexto.trim());
    condicionesIniciales();
}


function condicionesIniciales(){
    textoIngresado = "";
    listaTextoIngresado = [];
    textoCambiar = "";
    textoCambiado = "";
    nuevoTexto = "";

}