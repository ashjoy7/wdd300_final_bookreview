export async function searchBooks(searchTerm) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}`);
    const data = await response.json();
    return data.items;
}
