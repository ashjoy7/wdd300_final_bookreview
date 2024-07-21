export function setupUI(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = items.map(item => `
        <div class="card">
            <img src="${item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192'}" alt="${item.volumeInfo.title}">
            <h3>${item.volumeInfo.title}</h3>
            <p>${item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
            <a href="book-details.html?id=${item.id}">View Details</a>
            <button onclick="addToFavorites('${item.id}')">Add to Favorites</button>
        </div>
    `).join('');
}

export function addToFavorites(bookId) {
    const book = document.querySelector(`[data-id="${bookId}"]`);
    const bookData = {
        id: bookId,
        volumeInfo: {
            title: book.querySelector('h3').innerText,
            imageLinks: {
                thumbnail: book.querySelector('img').src
            }
        }
    };
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(bookData);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
