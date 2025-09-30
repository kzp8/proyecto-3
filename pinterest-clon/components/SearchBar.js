export function crearSearchBar(buscarCallback) {
    const container = document.createElement('div');
    container.classList.add('search-bar');

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Buscar imágenes...';
    container.appendChild(input);

    const boton = document.createElement('button');
    boton.textContent = 'Buscar';
    container.appendChild(boton);

    const sugerenciasContainer = document.createElement('div');
    sugerenciasContainer.classList.add('sugerencias');
    container.appendChild(sugerenciasContainer);

    const sugerencias = ['Coches', 'Cerveza', 'Mujeres', 'Gasolina'];
    sugerencias.forEach(texto => {
        const btn = document.createElement('button');
        btn.textContent = texto;
        btn.addEventListener('click', () => {
            input.value = texto;
            buscarCallback(texto);
        });
        sugerenciasContainer.appendChild(btn);
    });

    boton.addEventListener('click', () => {
        const query = input.value.trim();
        if (query) buscarCallback(query);
    });

    input.addEventListener('keyup', e => {
        if (e.key === 'Enter') {
            const query = input.value.trim();
            if (query) buscarCallback(query);
        }
    });

    return container;
}