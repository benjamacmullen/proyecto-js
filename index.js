/*
const dibujarProductos = ()=>{
    let contenedor = document.getElementById ("container");
    productos.forEach((producto,indice) => {
        let card= document.createElement("div");
        card.classList.add("card" , "col-sm-12" , "col-lg-3");
        card.innerHTML= `<img src="${producto.imagen}" class="card-img-top"  alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}</p>
        <a href="#" class="btn btn-primary"onClick="agregarAlcarrito()">Comprar</a>
      </div>`;
      contenedor.appendChild(card);


    });
};


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
}
*/

document.addEventListener("DOMContentLoaded", () => {
  let misProductos = [
    /*
        { id: 1, 
        nombre:"Maple-PISCIS", 
        precio: 2500, 
        imagen: "./assets/img/piscis.webp"},
        
        { id: 2, 
        nombre:"Maple-SAUCE",
        precio: 2500, 
        imagen:"./assets/img/sauce.webp"},
        
        { id: 3, 
        nombre: "Maple-BJJ",
        precio: 2500,
        imagen: "./assets/img/bjj.jpeg"},
        
        { id: 4, 
        nombre: "Guatambu-PISCIS", 
        precio: 2500,
        imagen: "./assets/img/gua piscids.webp"},
        
        { id: 5, 
        nombre: "Guatambu-SAUCE", 
        precio: 2500,
        imagen: "./assets/img/gua saUCE.webp"},
        
        { id: 6, 
        nombre: "Guatambu-BJJ", 
        precio: 2500,
        imagen: "./assets/img/gua bjj.jpeg" },
        */
  ];

  let carrito = [];
  const divisa = "$";
  const DOMitems = document.querySelector("#items");
  const DOMcarrito = document.querySelector("#carrito");
  const DOMtotal = document.querySelector("#total");
  const DOMbotonVaciar = document.querySelector("#boton-vaciar");
  const miLocalStorage = window.localStorage;

  function dibujarProductos() {
    misProductos.forEach((info) => {
      const miNodo = document.createElement("div");
      miNodo.classList.add("card", "col-sm-4");
      const miNodoCardBody = document.createElement("div");
      miNodoCardBody.classList.add("card-body");
      const miNodoTitle = document.createElement("h5");
      miNodoTitle.classList.add("card-title");
      miNodoTitle.textContent = info.nombre;
      const miNodoImagen = document.createElement("img");
      miNodoImagen.classList.add("img-fluid");
      miNodoImagen.setAttribute("src", info.imagen);
      const miNodoPrecio = document.createElement("p");
      miNodoPrecio.classList.add("card-text");
      miNodoPrecio.textContent = `${info.precio}${divisa}`;
      const miNodoBoton = document.createElement("button");
      miNodoBoton.classList.add("btn", "btn-primary");
      miNodoBoton.textContent = "+";
      miNodoBoton.setAttribute("marcador", info.id);
      miNodoBoton.addEventListener("click", añadirProductoAlCarrito);
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodo.appendChild(miNodoCardBody);
      DOMitems.appendChild(miNodo);
    });
  }

  function renderizarProductos() {
    fetch("./data.json")
      .then((res) => {
        return res.json();
      })
      .then((productos) => {
        productos.forEach((info) => {
            const miNodo = document.createElement("div");
            miNodo.classList.add("card", "col-sm-4");
            const miNodoCardBody = document.createElement("div");
            miNodoCardBody.classList.add("card-body");
            const miNodoTitle = document.createElement("h5");
            miNodoTitle.classList.add("card-title");
            miNodoTitle.textContent = info.nombre;
            const miNodoImagen = document.createElement("img");
            miNodoImagen.classList.add("img-fluid");
            miNodoImagen.setAttribute("src", info.imagen);
            const miNodoPrecio = document.createElement("p");
            miNodoPrecio.classList.add("card-text");
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            const miNodoBoton = document.createElement("button");
            miNodoBoton.classList.add("btn", "btn-primary");
            miNodoBoton.textContent = "agregar";
            miNodoBoton.setAttribute("marcador", info.id);
            miNodoBoton.addEventListener("click", añadirProductoAlCarrito);
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
            misProductos=productos;
        });
      });
  }
  renderizarProductos()


  function añadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute("marcador"));
    dibujarCarrito();
    guardarCarritoEnLocalStorage();
  }

  function dibujarCarrito() {
    DOMcarrito.textContent = "";
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
      const miItem = misProductos.filter((itemProductos) => {
        return itemProductos.id === parseInt(item);
      });
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
        return itemId === item ? (total += 1) : total;
      }, 0);
      const miNodo = document.createElement("li");
      miNodo.classList.add("list-group-item", "text-right", "mx-2");
      miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
      const miBoton = document.createElement("button");
      miBoton.classList.add("btn", "btn-danger", "mx-5");
      miBoton.textContent = "X";
      miBoton.style.marginLeft = "1rem";
      miBoton.dataset.item = item;
      miBoton.addEventListener("click", borrarItemCarrito);
      miNodo.appendChild(miBoton);
      DOMcarrito.appendChild(miNodo);
    });
    DOMtotal.textContent = calcularTotal();
  }

  function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
    });
    dibujarCarrito();
    guardarCarritoEnLocalStorage();
  }

  function calcularTotal() {
    return carrito
      .reduce((total, item) => {
        const miItem = misProductos.filter((itemProductos) => {
          return itemProductos.id === parseInt(item);
        });
        return total + miItem[0].precio;
      }, 0)
      .toFixed(2);
  }

  function vaciarCarrito() {
    carrito = [];
    dibujarCarrito();
    localStorage.clear();
  }

  function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem("carrito", JSON.stringify(carrito));
  }

  function cargarCarritoDeLocalStorage() {
    if (miLocalStorage.getItem("carrito") !== null) {
      carrito = JSON.parse(miLocalStorage.getItem("carrito"));
    }
  }

  DOMbotonVaciar.addEventListener("click", vaciarCarrito);

  cargarCarritoDeLocalStorage();
  dibujarProductos();
  dibujarCarrito();
});


const btn = document.querySelector("#myBtn");
btn.addEventListener("click", () => {
  Swal.fire({
    title: "Macskateshop",
    text: "Somos un skateshop 100% uruguayo con productos de calidad",
    icon: "success",
    confirmButtonText: "Gracias por formar parte",
  });
});


let btnCarrito = document.getElementById("btnCarrito")
let imgCarrito = document.getElementById("imgCarrito");
let listaCarrito = document.getElementById("listaCarrito");

btnCarrito.addEventListener("click", ()=>{
    if(listaCarrito.className == "carritoAnimation"){
        imgCarrito.src = "./assets/img/carrito.png";
        listaCarrito.className = "carritoAnimationSalir";
    }else{
        imgCarrito.src = "./assets/img/carritoX.png";
        listaCarrito.className = "carritoAnimation";
    }
    
});

/*
  const lista = document.querySelector("#listado")

  fetch("./assets/JS/data.jason")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((producto)=>{
        const li = document.createElement("li")
        li.innerHTML=`
        <h4>${producto.nombre}</h4>
        <p>${producto.precio}</p>

    
        `
        lista.append(li)
    })
  })
*/
