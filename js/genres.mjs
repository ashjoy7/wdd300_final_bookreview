import { setupUI } from './ui-components.mjs';

async function fetchGenres() {
    const response = await fetch('data/genres.json');
    const genres = await response.json();
    const genreList = document.getElementById('genreList');
    genreList.innerHTML = genres.map(genre => `
        <button onclick="fetchBooksByGenre('${genre}')">${genre}</button>
    `).join('');
}

async function fetchBooksByGenre(genre) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}`);
    const data = await response.json();
    setupUI(data.items, 'genreBooks');
}

fetchGenres();
