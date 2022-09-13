
class Producto {
    constructor (nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
}
}

let tablas = [
{ nombre:"Maple-PISCIS", precio: 2500},
{ nombre:"Maple-SAUCE",precio: 2500},
{ nombre: "Maple-BJJ", precio: 2500},
{ nombre: "Guatambu-PISCIS", precio: 2500},
{ nombre: "Guatambu-SAUCE", precio: 2500},
{ nombre: "Guatambu-BJJ", precio: 2500},
]

let ruedas = [
    { nombre: "Spitfire formula 4", precio: 2999},
    { nombre: "Spitfire classics", precio: 2999},
    { nombre: "Bones street formula", precio: 2300},
    { nombre: "Bones Reaper formula", precio: 2300},
    { nombre: "Oj wheels super juice", precio: 2200},
    { nombre: "Oj wheels concetrate", precio: 2200},
]

let trucks = [
    { nombre: "Indy (149)", precio: 3500},
    { nombre: "Indy (139)", precio: 3500},
    { nombre: "Thunder (149)", precio: 2700},
    { nombre: "Thunder (139)", precio: 2700},
    { nombre: "Royal (149)", precio: 2600},
    { nombre: "Royal (139)", precio: 2600},
]


const agregarProductos = [];

function VolverAlMenu() {
    let bandera = prompt ("Desea volver al menu inicio?")
    if (bandera == "Y" || bandera == "y") { 
        return true }
    else {
        return false
    }
}
    
function venderProductos(productos) {
    productos.forEach(producto => {
        let productoId = prompt ("Desea comprar el producto: \n nombre: "+producto.nombre+" \n precio: "+producto.precio+"  \n Y/N" )
        if (productoId == "Y") {
            agregarproductos.push(producto);
        }
    });
}
return VolverAlMenu()

function listaProductos (){
    let precioTotal = 0;

    agregarProductos.forEach(producto => {
        alert("\n" +producto.nombre+ " precio: " + producto.precio)
        precioTotal+= producto.precio;
    });
    alert('El precio total es: "+ precioTotal" ');
    return VolverAlMenu()
}

function mensajeSalida() {
    alert("Gracias por ingresar a la tienda")
}
let bandera = true;
while (bandera) {
    let opcion = prompt("Indique la opcion que quiere escoger \n 1-Comprar tablas \n 2-Comprar ruedas \n 3-Comprar trucks \n 4-Listar productos \n 5-Salir de la tienda")
    if (opcion == 1) {
        bandera = venderProductos (tablas);
    } else if (opcion == 2){
        bandera = venderProductos (ruedas);
    } else if (opcion == 3) {
        bandera = venderProductos (trucks);
    } else if (opcion == 4 ) {
        bandera = listaProductos();
    } else if (opcion == 5 ) {
        bandera = mensajeSalida()
    }
}
