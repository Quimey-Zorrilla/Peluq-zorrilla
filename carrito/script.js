localStorage.setItem('carrito', JSON.stringify([]))
let divProductos = document.getElementById("divProductos")
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById('precioTotal')
let acumulador;

fetch('./productos.json')
.then(response => response.json())
.then(dataProductos => {
    dataProductos.forEach((productoEnArray, indice)=> {
    divProductos.innerHTML += `
        <div class="card border-dark mb-3 cardProducto" id="producto${indice}" style="max-width: 20rem; margin:8px">
            <div class="card-header cardTitulo">${productoEnArray.nombre}</div>
            <img src="./imgCarr/${productoEnArray.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title cardTitulo">${productoEnArray.marca}</h4>
                <p class="card-text precio">$${productoEnArray.precio}</p>
                <button id="boton${indice}" class="btn btn-light boton"><i class="fas fa-cart-plus fa-2x icono"></i></button>
            </div>
        </div>
        `
    });
    dataProductos.forEach((productoEnArray, indice) => {
        document.getElementById(`boton${indice}`).addEventListener('click', () => {
            if(productos.find(producto => producto.nombre == productoEnArray.nombre)) {
                let index = productos.findIndex(producto => producto.nombre == productoEnArray.nombre)
                productos[index].cant++
                localStorage.setItem('carrito', JSON.stringify(productos))
            } else {
                let nuevoProducto = new Producto(productoEnArray.nombre, productoEnArray.marca, productoEnArray.precio, productoEnArray.stock, productoEnArray.img)
                productos.push(nuevoProducto)
                localStorage.setItem('carrito', JSON.stringify(productos))
            }
            
        })
    })
})
