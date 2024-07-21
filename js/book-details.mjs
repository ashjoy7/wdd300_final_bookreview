import { setupUI } from './ui-components.mjs';

const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');

async function fetchBookDetails() {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
    const book = await response.json();
    setupUI(book, 'bookDetails');
}

fetchBookDetails();
