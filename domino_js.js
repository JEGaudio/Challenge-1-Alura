let cartas_mano = [];


const celda_seleccionada = document.querySelector(".piezas tbody");

celda_seleccionada.addEventListener('click',function (e){
    const celda = e.target.closest('td');
    if (!celda) {return;} // Quit, not clicked on a cell
    //const row = celda.parentElement;
    //console.log(celda.innerHTML, row.rowIndex, celda.cellIndex);
    if (cartas_mano.indexOf(celda.innerHTML) == -1) {
        cartas_mano.push(celda.innerHTML);
        celda.style.backgroundColor = 'green';
        console.log(cartas_mano);
        return;
    }
    cartas_mano.splice(cartas_mano.indexOf(celda.innerHTML),1);
    celda.style.backgroundColor = '';
    console.log(cartas_mano);
});


function boton_aceptar (){

}

function resetear_juego() {
    cartas_mano.splice(0,cartas_mano.length);
    var celdas = document.getElementsByName("piezas_id");
    celdas.style.backgroundColor="";
    console.log(celdas);
}