/* Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área */

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }


  setAlto(nuevoAlto) {
    if (!isNaN(nuevoAlto) && nuevoAlto > 0) {
      this.alto = nuevoAlto;
      console.log(`Alto modificado a: ${this.alto}`);
    } else {
      console.log("Error: el alto debe ser un número positivo.");
    }
  }


  setAncho(nuevoAncho) {
    if (!isNaN(nuevoAncho) && nuevoAncho > 0) {
      this.ancho = nuevoAncho;
      console.log(`Ancho modificado a: ${this.ancho}`);
    } else {
      console.log("Error: el ancho debe ser un número positivo.");
    }
  }

  
  mostrar() {
    console.log(`Rectángulo: Alto = ${this.alto}, Ancho = ${this.ancho}`);
  }

  
  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}


let alto = parseFloat(prompt("Ingresa el alto del rectángulo:"));
let ancho = parseFloat(prompt("Ingresa el ancho del rectángulo:"));

const rect = new Rectangulo(alto, ancho);


while (true) {
  const opcion = prompt(
    `¿Qué deseas hacer con el rectángulo?\n` +
    `1 - Mostrar propiedades\n` +
    `2 - Modificar alto\n` +
    `3 - Modificar ancho\n` +
    `4 - Calcular perímetro\n` +
    `5 - Calcular área\n` +
    `6 - Salir`
  );

  if (opcion === "1") {
    rect.mostrar();
  } else if (opcion === "2") {
    const nuevoAlto = parseFloat(prompt("Nuevo alto:"));
    rect.setAlto(nuevoAlto);
  } else if (opcion === "3") {
    const nuevoAncho = parseFloat(prompt("Nuevo ancho:"));
    rect.setAncho(nuevoAncho);
  } else if (opcion === "4") {
    alert(`El perímetro es: ${rect.calcularPerimetro()}`);
  } else if (opcion === "5") {
    alert(`El área es: ${rect.calcularArea()}`);
  } else if (opcion === "6") {
    alert("Programa finalizado.");
    break;
  } else {
    alert("Opción inválida.");
  }
}