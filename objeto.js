const persona = {
    nombre: "Juan",
    edad: 30,
    esEstudiante: true,
    mascotas: ["Perro", "Gato","caballo"],
    direccion: {
      calle: "Calle Principal",
      numero: 123,
      ciudad: "Ciudad Ejemplo"
    },
    saludar: function() {
      console.log(`¡Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  };
  
  console.log(persona.nombre); // Imprime: "Juan"
  console.log(persona.mascotas[2]); // Imprime: "Perro"
  persona.saludar(); // Imprime: "¡Hola! Mi nombre es Juan y tengo 30 años."
  