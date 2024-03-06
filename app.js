let textoIngresado = "";
let listaTextoIngresado = [];
let textoCambiar = "";
let textoCambiado = "";
let nuevoTexto = "";

mostrarImagenSinTexto(true);


function Encriptar () {
    textoIngresado = document.getElementById('texto-ingresado').value;
    
    if(textoIngresado ==""){
        mostrarImagenSinTexto(true);
        return;
    }
    
    mostrarImagenSinTexto(false);

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
    condicionesIniciales();


}

function Desencriptar () {
    textoIngresado = document.getElementById('texto-ingresado').value;
    
    if(textoIngresado ==""){
        mostrarImagenSinTexto(true);
        return;
    }
    
    mostrarImagenSinTexto(false);
    
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
    condicionesIniciales();
}

function condicionesIniciales(){
    textoIngresado = "";
    listaTextoIngresado = [];
    textoCambiar = "";
    textoCambiado = "";
    nuevoTexto = "";

}

function mostrarImagenSinTexto(bool){
    if (bool) {
        document.getElementById("mostrar-imagen").style.display = "inline-block";
        document.getElementById("mostrar-texto").style.display = "none";
    }
    else{
        document.getElementById("mostrar-imagen").style.display = "none";
        document.getElementById("mostrar-texto").style.display = "inline-block";
    }
}

function copiarTexto() {
        
    var textoCopiado = document.querySelector('#texto-convertido').innerHTML;
    navigator.clipboard.writeText(textoCopiado);
    
}

function borrarTexto(){
    document.getElementById('texto-ingresado').value = "";
}

// const vocales = {
//     a: "ai",
//     e: "enter",
//     i: "imes",
//     o: "ober",
//     u: "ufat",
//   };
  
//   const encriptar = (texto = "") =>
//     texto
//       .split("")
//       .map((e) => (vocales.hasOwnProperty(e) ? vocales[e] : e))
//       .join("");
  