class Avion {
  constructor(nombre, capacidad, destino) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaPasajeros = [];
  }

  abordar(pasajero) {
    if (this.listaPasajeros.length < this.capacidad) {
      this.listaPasajeros.push(pasajero);
      document.writeln(`${pasajero} ha abordado el avión ${this.nombre}<br>`);
    } else {
      document.writeln(`El avión ${this.nombre} está lleno. No se puede abordar.<br>`);
    }
  }
}

class Aeropuerto {
  constructor(nombreAeropuerto) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaAviones = [];
  }

  agregarAvion(avion) {
    this.listaAviones.push(avion);
  }

  buscarAvion(nombre) {
    for (let avion of this.listaAviones) {
      if (avion.nombre === nombre) {
        document.writeln(`Avión encontrado: ${avion.nombre}, destino: ${avion.destino}<br>`);
        return avion;
      }
    }
    document.writeln(`No se encontró ningún avión con el nombre "${nombre}".<br>`);
    return null;
  }
}

// Crear aeropuerto
const aeropuerto = new Aeropuerto("Aeropuerto Internacional");

// Crear 3 aviones con datos ingresados por el usuario
const nombre1 = prompt("Ingrese el nombre del primer avión:");
const capacidad1 = parseInt(prompt("Ingrese la capacidad (cantidad de pasajeros) del primer avión:"));
const destino1 = prompt("Ingrese el destino del primer avión:");
const avion1 = new Avion(nombre1, capacidad1, destino1);

const nombre2 = prompt("Ingrese el nombre del segundo avión:");
const capacidad2 = parseInt(prompt("Ingrese la capacidad (cantidad de pasajeros) del segundo avión:"));
const destino2 = prompt("Ingrese el destino del segundo avión:");
const avion2 = new Avion(nombre2, capacidad2, destino2);

const nombre3 = prompt("Ingrese el nombre del tercer avión:");
const capacidad3 = parseInt(prompt("Ingrese la capacidad (cantidad de pasajeros) del tercer avión:"));
const destino3 = prompt("Ingrese el destino del tercer avión:");
const avion3 = new Avion(nombre3, capacidad3, destino3);

// Agregar los aviones al aeropuerto
aeropuerto.agregarAvion(avion1);
aeropuerto.agregarAvion(avion2);
aeropuerto.agregarAvion(avion3);

// Buscar un avión
const nombreABuscar = prompt("Ingrese el nombre del avión que desea buscar:");
const avionEncontrado = aeropuerto.buscarAvion(nombreABuscar);

// Abordar pasajeros si el avión existe
if (avionEncontrado !== null) {
  while (avionEncontrado.listaPasajeros.length < avionEncontrado.capacidad) {
    const pasajero = prompt("Ingrese el nombre del pasajero que desea abordar:");
    avionEncontrado.abordar(pasajero);
  }
}
