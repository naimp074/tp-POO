class Libro {
  constructor(isbn, titulo, autor, numPaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
  }

 
  getISBN() {
    return this.isbn;
  }

  getTitulo() {
    return this.titulo;
  }

  getAutor() {
    return this.autor;
  }

  getNumPaginas() {
    return this.numPaginas;
  }


  setISBN(nuevoISBN) {
    this.isbn = nuevoISBN;
  }

  setTitulo(nuevoTitulo) {
    this.titulo = nuevoTitulo;
  }

  setAutor(nuevoAutor) {
    this.autor = nuevoAutor;
  }

  setNumPaginas(nuevoNumPaginas) {
    this.numPaginas = nuevoNumPaginas;
  }

 
  mostrarLibro() {
    return `El libro "${this.titulo}" con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`;
  }
}       

const isbn1 = prompt("Libro 1 - Ingresa el ISBN:");
const titulo1 = prompt("Libro 1 - Ingresa el título:");
const autor1 = prompt("Libro 1 - Ingresa el autor:");
const paginas1 = parseInt(prompt("Libro 1 - Ingresa el número de páginas:"));


const libro1 = new Libro(isbn1, titulo1, autor1, paginas1);


const isbn2 = prompt("Libro 2 - Ingresa el ISBN:");
const titulo2 = prompt("Libro 2 - Ingresa el título:");
const autor2 = prompt("Libro 2 - Ingresa el autor:");
const paginas2 = parseInt(prompt("Libro 2 - Ingresa el número de páginas:"));


const libro2 = new Libro(isbn2, titulo2, autor2, paginas2);


alert(libro1.mostrarLibro());
alert(libro2.mostrarLibro());


if (libro1.getNumPaginas() > libro2.getNumPaginas()) {
  alert(`El libro "${libro1.getTitulo()}" tiene más páginas.`);
} else if (libro1.getNumPaginas() < libro2.getNumPaginas()) {
  alert(`El libro "${libro2.getTitulo()}" tiene más páginas.`);
} else {
  alert("Ambos libros tienen el mismo número de páginas.");
}            