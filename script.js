// script.js

// Funcionalidad de búsqueda básica (puede ampliarse)
document.getElementById('search-btn').addEventListener('click', () => {
  const category = document.getElementById('search-category').value.toLowerCase();
  const query = document.getElementById('search-input').value.trim().toLowerCase();

  if (!query) {
    alert('Por favor ingresa un término de búsqueda / Please enter a search term');
    return;
  }

  // Ejemplo simple: redirigir según categoría
  let url = 'index.html'; // default

  switch(category) {
    case 'services':
      url = 'services.html';
      break;
    case 'products':
      url = 'gallery.html'; // suponiendo productos en galería
      break;
    case 'about':
      url = 'about.html';
      break;
    case 'contact':
      url = 'contact.html';
      break;
    default:
      url = 'index.html';
  }

  // Puedes mejorar esto con búsquedas reales o filtros
  alert(`Buscando "${query}" en categoría "${category}"... / Searching "${query}" in category "${category}"...`);
  window.open(url, '_blank');
});
