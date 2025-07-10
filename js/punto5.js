class Persona {
  constructor(nombre, edad, sexo, peso, altura, anionacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo.toUpperCase();
    this.peso = peso;
    this.altura = altura;
    this.anionacimiento = anionacimiento;
    this.dni = this.generaDNI();
  }

 
  generaDNI() {
    return Math.floor(10000000 + Math.random() * 90000000);
  }


  mostrarGeneracion() {
    const anio = this.anionacimiento;
    let generacion = "";
    let rasgo = "";

    if (anio >= 1994 && anio <= 2010) {
      generacion = "Generación Z";
      rasgo = "Irreverencia";
    } else if (anio >= 1981 && anio <= 1993) {
      generacion = "Generación Y (Millennials)";
      rasgo = "Frustración";
    } else if (anio >= 1969 && anio <= 1980) {
      generacion = "Generación X";
      rasgo = "Obsesión por el éxito";
    } else if (anio >= 1949 && anio <= 1968) {
      generacion = "Baby Boom";
      rasgo = "Ambición";
    } else if (anio >= 1930 && anio <= 1948) {
      generacion = "Silent Generation";
      rasgo = "Austeridad";
    } else {
      generacion = "Desconocida";
      rasgo = "Sin información";
    }

    alert(`${this.nombre} pertenece a la ${generacion}.\nRasgo característico: ${rasgo}`);
  }


  esMayorDeEdad() {
    if (this.edad >= 18) {
      alert(`${this.nombre} es mayor de edad.`);
    } else {
      alert(`${this.nombre} NO es mayor de edad.`);
    }
  }


  mostrarDatos() {
    alert(
      `Nombre: ${this.nombre}\n` +
      `Edad: ${this.edad}\n` +
      `DNI: ${this.dni}\n` +
      `Sexo: ${this.sexo}\n` +
      `Peso: ${this.peso} kg\n` +
      `Altura: ${this.altura} m\n` +
      `Año de nacimiento: ${this.anionacimiento}`
    );
  }
}


const nombre = prompt("Ingresa tu nombre:");
const edad = parseInt(prompt("Ingresa tu edad:"));
const sexo = prompt("Ingresa tu sexo (H/M):");
const peso = parseFloat(prompt("Ingresa tu peso en kg:"));
const altura = parseFloat(prompt("Ingresa tu altura en metros:"));
const anionacimiento = parseInt(prompt("Ingresa tu año de nacimiento:"));


const persona = new Persona(nombre, edad, sexo, peso, altura, anionacimiento);


while (true) {
  const opcion = prompt(
    `¿Qué deseas hacer?\n` +
    `1 - Mostrar generación\n` +
    `2 - Ver si es mayor de edad\n` +
    `3 - Mostrar todos los datos\n` +
    `4 - Salir`
  );

  if (opcion === "1") {
    persona.mostrarGeneracion();
  } else if (opcion === "2") {
    persona.esMayorDeEdad();
  } else if (opcion === "3") {
    persona.mostrarDatos();
  } else if (opcion === "4") {
    alert("Programa finalizado.");
    break;
  } else {
    alert("Opción inválida.");
  }
}
