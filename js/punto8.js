class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
    }

    despedirse() {
        console.log(`Chau, soy ${this.nombre}, ¡nos vemos pronto!`);
    }
}

const persona1 = new Persona("Seba", 32, "Estudiante de Ciberseguridad");
const persona2 = new Persona("Laura", 28, "Diseñadora Grafica");

persona1.saludar();
persona1.despedirse();

persona2.saludar();
persona2.despedirse();