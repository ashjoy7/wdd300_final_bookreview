import { searchBooks } from './search.mjs';
import { setupUI } from './ui-components.mjs';

document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById('searchInput').value;
    const results = await searchBooks(searchTerm);
    setupUI(results, 'searchResults');
});
