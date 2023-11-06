// Tu código JavaScript para el carrito de compras aquí

// Obtén una referencia a la lista del carrito
const carritoLista = document.getElementById("carrito-lista-menu");

// Obtén una referencia al total del precio en el menú
const totalPrecioMenu = document.getElementById("total-precio-menu");

// Agregar un manejador de eventos a todos los botones "Añadir al carrito"
const botonesAñadirAlCarrito = document.querySelectorAll(".añadir-al-carrito");
botonesAñadirAlCarrito.forEach((boton) => {
    boton.addEventListener("click", () => {
        // Crear un nuevo elemento de lista
        const nuevoItem = document.createElement("li");

        // Obtener los valores del producto desde el botón
        const precioProducto = boton.getAttribute("data-precio"); // Precio del producto
        const nombreProducto = boton.parentElement.querySelector("h2").textContent; // Nombre del producto
        const imagenProductoSrc = boton.parentElement.querySelector("img").src; // Ruta de la imagen

        // Crear una imagen y establecer su src
        const imagenProducto = document.createElement("img");
        imagenProducto.src = imagenProductoSrc;
        imagenProducto.alt = "Imagen del producto";

        // Crear elementos de texto para el nombre y el precio
        const nombreProductoElement = document.createElement("span");
        nombreProductoElement.textContent = nombreProducto;

        const precioProductoElement = document.createElement("span");
        precioProductoElement.textContent = `$${precioProducto}`; // Precio del producto

        // Agregar la imagen, nombre y precio al nuevo elemento de lista
        nuevoItem.appendChild(imagenProducto);
        nuevoItem.appendChild(nombreProductoElement);
        nuevoItem.appendChild(precioProductoElement);

        // Agregar el nuevo elemento de lista a la lista del carrito
        carritoLista.appendChild(nuevoItem);

        // Actualizar el precio total en el menú
        const precioProductoNumerico = parseFloat(precioProducto); // Precio del producto en formato numérico
        const totalActual = parseFloat(totalPrecioMenu.textContent.replace("$", ""));
        const nuevoTotal = totalActual + precioProductoNumerico;
        totalPrecioMenu.textContent = `$${nuevoTotal.toFixed(2)}`;
    });
});

// Obtén una referencia al botón "Mostrar Carrito" y al menú del carrito
const botonMostrarCarrito = document.getElementById("boton-mostrar-carrito");
const carritoMenu = document.getElementById("carrito-menu");

// Agrega un manejador de eventos para el botón "Mostrar Carrito"
botonMostrarCarrito.addEventListener("click", () => {
  // Alternar la visibilidad del menú del carrito al hacer clic en el botón
  carritoMenu.classList.toggle("visible");
});
