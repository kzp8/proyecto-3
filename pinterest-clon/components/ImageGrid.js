import '../styles/imagegrid.css';

export function crearImageGrid() {
    const grid = document.createElement('div');
    grid.classList.add('image-grid');
    return grid;
}

export function mostrarImagenes(grid, imagenes) {
    grid.innerHTML = '';
    if (!imagenes || imagenes.length === 0) {
        grid.textContent = 'No se encontraron imágenes.';
        return;
    }

    imagenes.forEach(imgData => {
        const img = document.createElement('img');
        img.src = imgData.urls.small;
        img.alt = imgData.alt_description || 'Imagen';
        grid.appendChild(img);
    });
}