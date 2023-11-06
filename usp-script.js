


    const imagenesMiniatura = document.querySelectorAll(".imagen-miniatura");
    const imagenCentral = document.querySelector(".imagen-central");

    imagenesMiniatura.forEach((miniatura) => {
        miniatura.addEventListener("click", () => {
            // Cambiar la imagen central al hacer clic en la miniatura
            imagenCentral.src = miniatura.src;
        });
    });



