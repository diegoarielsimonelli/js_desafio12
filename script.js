
$(document).ready(function() {
    console.log("Listo el DOM");
});
$(window).on('load', function() {
    console.log("Se cargó todo, ¡incluyendo imagenes y archivos externos!");
});




let Productos = [
    { id: 1, nombre: "Ensalada Fattoush", precio: 1000 },
    { id: 2, nombre: "Escalativa Catalana Vegana", precio: 900 },
    { id: 3, nombre: "Vegetales Asados", precio: 1500 },
    { id: 4, nombre: "Sushi Vegano", precio: 1200 },
    { id: 5, nombre: "Hamburgueza de Lentejas", precio: 950 },
    { id: 6, nombre: "Sandwich de milanesa de Seitán", precio: 920 }
];

let carrito = [];

for (const producto of Productos) {
    
    $("#app").append(`<div>
                        <h4>  Producto: ${producto.nombre}</h4>
                        <b> $ ${producto.precio}</b>
                        <button id="btn${producto.id}">Comprar</button>
                        </div>`);
    //Asociamos el evento a botón recién creado.
    $(`#btn${producto.id}`).on('click', function() {
        console.log(`Compraste ${producto.nombre}`);
        carrito.push(Productos[producto.id - 1]);
        console.log(carrito);
    });
}
$("#botonBorrar").on('click', () => {
    while(carrito.length > 0)
  carrito.pop() })

let visibilidad = true;
$("#botonBorrar").on('click', () => {
    
    visibilidad ? $("#borrar").css({ display: "none" }) : $("#borrar").css({ display: "inline-block" });
    visibilidad = !visibilidad;
    
});

$("#botonBorrar").on('click', () => {
    
    $('body').append('<h1>Borraste el carrito</h1>')
    
});
