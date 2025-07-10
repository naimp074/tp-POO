/* Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:



objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
 */
const auto = {
  color: "rojo",
  marca: "Toyota",
  modelo: "Corolla",
  encendido: false,

  encender: function() {
    this.encendido = true;
    console.log("auto encendido");
  },

  apagar: function() {
    this.encendido = false;
    console.log("El auto se apagó");
  }
};


const accion = prompt("¿Qué quieres hacer? (encender / apagar)").toLowerCase();


if (accion === "encender") {
  auto.encender();
} else if (accion === "apagar") {
  auto.apagar();
} else {
  console.log("Acción no válida");
}


document.writeln("<h1>Auto</h1>");
document.writeln("Color: " + auto.color + "<br>");
document.writeln("Marca: " + auto.marca + "<br>");
document.writeln("Modelo: " + auto.modelo + "<br>");
document.writeln("Encendido: " + auto.encendido + "<br>");
