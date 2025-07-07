/* Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

Rectángulos
 */
class Cuenta {
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
    }

    ingresar(cantidad) {
        if (!isNaN(cantidad) && cantidad > 0) {
            this.saldo += cantidad;
            alert("Tarifa ingresada");
        } else {
            alert("Error: la cantidad debe ser un número positivo.");
        }
    }

    extraer(cantidad) {
        if (!isNaN(cantidad) && cantidad > 0) {
            if (cantidad <= this.saldo) {
                this.saldo -= cantidad;
                alert("Se ha extraído $" + cantidad);
            } else {
                alert("Saldo insuficiente.");
            }
        } else {
            alert("Error: la cantidad debe ser un número positivo.");
        }
    }

    informar() {
        alert(`Titular: ${this.titular}\nSaldo: $${this.saldo}`);
    }
}


const cuentaAlex = new Cuenta("Alex");


while (true) {
    const opcion = prompt(
        `¿Qué deseas hacer?\n` +
        `1 - Ingresar dinero\n` +
        `2 - Extraer dinero\n` +
        `3 - Ver saldo\n` +
        `4 - Salir`
    );

    if (opcion == "1") {
        const cantidad = parseFloat(prompt("¿Cuánto quieres ingresar?"));
        cuentaAlex.ingresar(cantidad);
    } else if (opcion == "2") {
        const cantidad = parseFloat(prompt("¿Cuánto quieres extraer?"));
        cuentaAlex.extraer(cantidad);
    } else if (opcion == "3") {
        cuentaAlex.informar();
    } else if (opcion == "4") {
        alert("Programa finalizado.");
        break;
    } else {
        alert("Opción inválida.");
    }
}

