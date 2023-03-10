// fetch

const url = "./src/components/data/stock.json"

fetch(url)
.then(res => res.json())
.then(data => pintarProductos(data))

const pintarProductos = () => {
  const contenedor = document.getElementById("producto-contenedor");

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML +=`<div class="card-image">
                      <img src=${producto.img}>
                      <span class="card-title">${producto.nombre}</span>
                      <a class="cont-boton btn-floating halfway-fab wabes-effect waves-light"><i id=${producto.id} class="agregar-carrito material-icons agregar">add_shopping_cart</i></a>
                      </div>
                      <div class="card-content">
                          <p>${producto.tipo}</p>
                          <p>${producto.precio}</p>
                      </div>
                      `
    contenedor.appendChild(div);
  });
};
