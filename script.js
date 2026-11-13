function mostrarCarrusel(categoria) {
  const todos = document.querySelectorAll('.galeria-carrusel');
  todos.forEach(carrusel => {
    carrusel.classList.add('oculto');
  });

  const activo = document.getElementById('carrusel-' + categoria);
  if (activo) {
    activo.classList.remove('oculto');
  }
}

function alternarMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('cerrado');
}

function filtrarCategorias() {
  const texto = document.getElementById('input-busqueda').value.toLowerCase();
  const items = document.querySelectorAll('.menu-categorias li');

  items.forEach(item => {
    const nombre = item.textContent.toLowerCase();
    item.style.display = nombre.includes(texto) ? 'block' : 'none';
  });
}
