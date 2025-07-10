/*9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". 
Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido".
Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", 
y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. */

class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    console.log(`${this.nombre} emite un sonido.`);
  }
}

class Perro extends Animal {
  emitirSonido() {
    console.log(`${this.nombre} dice: ¡Guau!`);
  }
}

class Gato extends Animal {
  emitirSonido() {
    console.log(`${this.nombre} dice: ¡Miau!`);
  }
}

const miPerro = new Perro("Roco", 5);
const miGato = new Gato("Michelle", 3);