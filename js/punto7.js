// Clase Contacto
    class Contacto {
      constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
      }
    }

    // Clase Agenda
    class Agenda {
      constructor(tamano = 10) {
        this.tamano = tamano;
        this.contactos = [];
      }

      aniadirContacto(contacto) {
        if (this.agendaLlena()) {
          alert("La agenda está llena. No se pueden agregar más contactos.");
        } else if (this.existeContacto(contacto)) {
          alert(`El contacto "${contacto.nombre}" ya existe.`);
        } else {
          this.contactos.push(contacto);
          alert(`Contacto "${contacto.nombre}" añadido correctamente.`);
        }
      }

      existeContacto(contacto) {
        return this.contactos.some(c => c.nombre === contacto.nombre);
      }

      listarContactos() {
        if (this.contactos.length === 0) {
          alert("La agenda está vacía.");
        } else {
          let lista = "Contactos:\n";
          this.contactos.forEach(c => {
            lista += `Nombre: ${c.nombre}, Teléfono: ${c.telefono}\n`;
          });
          alert(lista);
          document.write(`<pre>${lista}</pre>`);
        }
      }

      buscarContacto(nombre) {
        const encontrado = this.contactos.find(c => c.nombre === nombre);
        if (encontrado) {
          alert(`Teléfono de ${nombre}: ${encontrado.telefono}`);
        } else {
          alert(`No se encontró el contacto "${nombre}".`);
        }
      }

      eliminarContacto(contacto) {
        const indice = this.contactos.findIndex(c => c.nombre === contacto.nombre);
        if (indice !== -1) {
          this.contactos.splice(indice, 1);
          alert(`Contacto "${contacto.nombre}" eliminado.`);
        } else {
          alert(`No se encontró el contacto "${contacto.nombre}".`);
        }
      }

      agendaLlena() {
        return this.contactos.length >= this.tamano;
      }

      huecosLibres() {
        const libres = this.tamano - this.contactos.length;
        alert(`Huecos libres: ${libres}`);
      }
    }

    // Crear agenda con tamaño por defecto
    const agenda = new Agenda();

    // Menú principal
    let salir = false;
    while (!salir) {
      const opcion = prompt(
        "Elige una opción:\n" +
        "1. Añadir contacto\n" +
        "2. Buscar contacto por nombre\n" +
        "3. Eliminar contacto\n" +
        "4. Listar contactos\n" +
        "5. Ver si la agenda está llena\n" +
        "6. Ver huecos libres\n" +
        "7. Salir"
      );

      switch (opcion) {
        case "1":
          const nombreNuevo = prompt("Introduce el nombre:");
          const telefonoNuevo = prompt("Introduce el teléfono:");
          const nuevoContacto = new Contacto(nombreNuevo, telefonoNuevo);
          agenda.aniadirContacto(nuevoContacto);
          break;

        case "2":
          const nombreBuscar = prompt("Introduce el nombre a buscar:");
          agenda.buscarContacto(nombreBuscar);
          break;

        case "3":
          const nombreEliminar = prompt("Introduce el nombre del contacto a eliminar:");
          const contactoEliminar = new Contacto(nombreEliminar, "");
          agenda.eliminarContacto(contactoEliminar);
          break;

        case "4":
          agenda.listarContactos();
          break;

        case "5":
          if (agenda.agendaLlena()) {
            alert("La agenda está llena.");
          } else {
            alert("La agenda NO está llena.");
          }
          break;

        case "6":
          agenda.huecosLibres();
          break;

        case "7":
          salir = true;
          alert("Saliendo de la agenda.");
          break;

        default:
          alert("Opción no válida. Por favor, elige una opción del 1 al 7.");
      }
    }