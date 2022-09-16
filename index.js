

let productos = [
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
imagen: "../assets/img/bjj.jpeg"},

{ id: 4, 
nombre: "Guatambu-PISCIS", 
precio: 2500,
imagen: "../assets/img/gua piscids.webp"},

{ id: 5, 
nombre: "Guatambu-SAUCE", 
precio: 2500,
imagen: "../assets/img/gua saUCE.webp"},

{ id: 6, 
nombre: "Guatambu-BJJ", 
precio: 2500,
imagen: "../assets/img/gua bjj.jpeg" },

]

const dibujarProductos = ()=>{
    let contenedor = document.getElementById ("container");
    productos.forEach((producto,indice) => {
        let card= document.createElement("div");
        card.classList.add("card" , "col-sm-12" , "col-lg-3");
        card.innerHTML= `<img src="${producto.nombre}" class="card-img-top"  alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}</p>
        <a href="#" class="btn btn-primary"onClick="agregarAlcarrito()">Comprar</a>
      </div>`;
      contenedor.appendChild(card);


    });
};

dibujarProductos();

const agregarAlcarrito=() => {
   alert("Producto agregado al carrito");
}