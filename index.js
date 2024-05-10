var grid = document.querySelector('.grid-main');
  var masonry = new Masonry(grid, {
    itemSelector: '.grid-item-wrap',
    columnWidth: '.grid-item-wrap',
    percentPosition: false, // Ancho deseado de cada columna
    gutter: 10 // Espacio entre columnas
  });