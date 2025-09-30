import { crearSearchBar } from './components/SearchBar.js';
import { crearImageGrid, mostrarImagenes } from './components/ImageGrid.js';

const UNSPLASH_KEY = 'Ko2Snsd4lE2OIfe8fjjP_TUN-JZR0tfYEgxJ6hbksc4';
const root = document.body;

const searchContainer = document.getElementById('search-bar-container');
const gridContainer = document.getElementById('image-grid-container');

const imageGrid = crearImageGrid();
gridContainer.appendChild(imageGrid);

const searchBar = crearSearchBar(buscarImagenes);
searchContainer.appendChild(searchBar);

async function buscarImagenes(query) {
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=${UNSPLASH_KEY}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        mostrarImagenes(imageGrid, data.results);
    } catch (err) {
        console.error(err);
        imageGrid.textContent = 'Error al cargar imágenes.';
    }
}
