precio = 400000

precioSpan = document.querySelector(".precio-inicial");

precioSpan.innerHTML = precio;

var totalSpan = document.querySelector(".valor-total")

totalSpan.innerHTML = 0

var cantidadSpan = document.querySelector(".cantidad") 

var botonMas = document.querySelector("#butMas")

botonMas.onclick = sumar;

function sumar() {
    cantidadSpan.innerHTML = Number(cantidadSpan.innerHTML) + 1;
    totalSpan.innerHTML = Number(totalSpan.innerHTML) + precio;
}

var botonResta = document.querySelector("#butRest");

botonResta.onclick = resta;

function resta() {
    cantidadSpan.innerHTML = Number(cantidadSpan.innerHTML) - 1;
    totalSpan.innerHTML =
    Number(totalSpan.innerHTML) - precio;
}


