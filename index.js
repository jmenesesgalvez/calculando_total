//Elementos del DOM
document.addEventListener("DOMContentLoaded", function() {
    var cantidadElement = document.getElementById("cantidad");
    var precioElement = document.getElementById("precioProducto");
    var totalElement = document.getElementById("total");
    var botonIncrementar = document.getElementById("botonIncrementar");
    var botonDecrementar = document.getElementById("botonDecrementar");

//Variables
    var precioInicial = 400000;
    var precioPorProducto = precioInicial;

// Funciones

    precioElement.innerHTML = precioPorProducto;

    botonIncrementar.addEventListener("click", function() {
        actualizarCantidad(1);
    });

    botonDecrementar.addEventListener("click", function() {
        actualizarCantidad(-1);
    });

    function actualizarCantidad(cantidadIncremento) {
        var cantidadActual = parseInt(cantidadElement.innerHTML);

        cantidadActual += cantidadIncremento;

        if (cantidadActual < 0) {
            cantidadActual = 0;
        }

        var total = cantidadActual * precioPorProducto;

        cantidadElement.innerHTML = cantidadActual;
        totalElement.innerHTML = "Total: $" + total;
    }
});
// Eventos
    