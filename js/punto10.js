    // Clase Avion
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
          alert(`El pasajero ${pasajero} ha abordado el avión ${this.nombre}.`);
        } else {
          alert(`El avión ${this.nombre} está lleno. No se puede abordar.`);
        }
      }

      info() {
        return `Avión: ${this.nombre}, Destino: ${this.destino}, Capacidad: ${this.capacidad}, Pasajeros a bordo: ${this.listaPasajeros.length}`;
      }
    }

    // Clase Aeropuerto
    class Aeropuerto {
      constructor(nombreAeropuerto) {
        this.nombreAeropuerto = nombreAeropuerto;
        this.listaAviones = [];
      }

      agregarAvion(avion) {
        this.listaAviones.push(avion);
        document.writeln(`<p>Avión ${avion.nombre} agregado al aeropuerto.</p>`);
      }

      buscarAvion(nombreAvion) {
        const avionEncontrado = this.listaAviones.find(avion => avion.nombre === nombreAvion);
        if (avionEncontrado) {
          alert(`Avión encontrado: ${avionEncontrado.nombre}`);
          document.writeln(`<p>${avionEncontrado.info()}</p>`);
          return avionEncontrado;
        } else {
          alert(`No se encontró el avión "${nombreAvion}".`);
          return null;
        }
      }
    }

    // Crear aeropuerto
    const aeropuerto = new Aeropuerto("Aeropuerto Internacional");

    // Crear 3 aviones
    const avion1 = new Avion("Boeing 737", 2, "Madrid");
    const avion2 = new Avion("Airbus A320", 3, "Nueva York");
    const avion3 = new Avion("Embraer 190", 1, "Londres");

    // Agregar aviones al aeropuerto
    aeropuerto.agregarAvion(avion1);
    aeropuerto.agregarAvion(avion2);
    aeropuerto.agregarAvion(avion3);

    // Pedir al usuario el nombre del avión que quiere buscar
    const nombreBusqueda = prompt("¿Qué avión quieres buscar? (Ejemplo: Airbus A320)");

    const avionBuscado = aeropuerto.buscarAvion(nombreBusqueda);

    // Si se encontró, permitir abordar pasajeros
    if (avionBuscado) {
      let seguir = true;
      while (seguir) {
        const pasajero = prompt("Escribe el nombre del pasajero que desea abordar (o deja vacío para terminar):");
        if (pasajero) {
          avionBuscado.abordar(pasajero);
          document.writeln(`<p>${pasajero} abordó el avión.</p>`);
        } else {
          seguir = false;
        }
      }

      document.writeln(`<p>Abordaje finalizado. Pasajeros totales: ${avionBuscado.listaPasajeros.length}</p>`);
    }