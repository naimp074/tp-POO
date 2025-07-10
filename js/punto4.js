class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    document.writeln(`<p><strong>Código:</strong> ${this.codigo}<br>`);
    document.writeln(`<strong>Nombre:</strong> ${this.nombre}<br>`);
    document.writeln(`<strong>Precio:</strong> $${this.precio}</p>`);
  }
}


const productos = [];


for (let i = 1; i <= 3; i++) {
  const codigo = prompt(`Producto ${i}: Ingresa el código:`);
  const nombre = prompt(`Producto ${i}: Ingresa el nombre:`);
  const precio = parseFloat(prompt(`Producto ${i}: Ingresa el precio:`));

  const producto = new Producto(codigo, nombre, precio);
  productos.push(producto);
}


for (let producto of productos) {
  producto.imprimeDatos();
}
