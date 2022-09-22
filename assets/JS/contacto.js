function contacto(nombre,cedula,mail,contraseña) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.mail = mail;
    this.contraseña = contraseña;

    this.bienvenido = function () {
        console.log("Bienvenido" + this.nombre);
    }
}

/*

dibujarProductos();
let cart = [];
let carrito = document.getElementById("cart")

const agregarAlcarrito=(indice) => {
   const indiceEncontradoCarrito = cart.findIndex((elemento)=>{
    return elemento.id === productos[indice].id
});
if(indiceEncontradoCarrito === -1){
    const productoAgregar = productos[indice]
    productoAgregar.cantidad = 1;
    cart.push(productoAgregar);
    dibujarCarrito()
}else {
    cart[indiceEncontradoCarrito].cantidad +=1;
    dibujarCarrito()
}
};



let total = 0;
const dibujarCarrito= ()=> {
  carrito.className = "cart";
  carrito.innerHTML = "";
  if(cart.length > 0) {
    cart.forEach((producto,indice) => {
        total = total + producto.precio * producto.cantidad;
        const carritoContainer = document.createElement("div");
        carritoContainer.className = "producto-carrito";
        carritoContainer.innerHTML = `
        <img class="car-img" src="${producto.imagen}"/>
        <div class="product-details">
          ${producto.nombre}
        </div>
        <div class="product-details"> Cantidad: ${producto.cantidad}</div>
        <div class="product-details"> Precio: ${producto.precio}</div>
        <div class="product-details"> Subtotal: ${producto.precio * producto.cantidad}</div>
        <button class="btn btn-info" id="remove-product" onClick="removeProduct(${indice})">Eliminar productos</button>
         `;
         carrito.appendChild(carritoContainer);
    });
    const totalContainer = document.createElement("div");
    totalContainer.className= "total-carrito";
    totalContainer.innerHTML= `<div class= "total"> TOTAL $ ${total}</div>
    `
  }
}*/