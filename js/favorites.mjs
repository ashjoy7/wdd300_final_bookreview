export function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favoritesList');
    favoritesList.innerHTML = favorites.map(book => `
        <div class="card">
            <img src="${book.volumeInfo.imageLinks.thumbnail}" alt="${book.volumeInfo.title}">
            <h3>${book.volumeInfo.title}</h3>
            <button onclick="removeFromFavorites('${book.id}')">Remove</button>
        </div>
    `).join('');
}

export function removeFromFavorites(bookId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(book => book.id !== bookId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
}

document.addEventListener('DOMContentLoaded', displayFavorites);
