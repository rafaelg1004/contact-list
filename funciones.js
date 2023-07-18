function convertirCapitalized(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }
  
  // Ejemplo de uso
  console.log(convertirCapitalized("hola mundo")); // Resultado: "Hola mundo"
  console.log(convertirCapitalized("javascript")); // Resultado: "Javascript"

  function suma(a, b) {
    return a + b;
  }
  
  // Ejemplo de uso
  console.log(suma(5, 3)); // Resultado: 8
  console.log(suma(-2, 7)); // Resultado: 5
  const convertirArray = (palabra) => Array.from(palabra);

  // Ejemplo de uso
  console.log(convertirArray("hola")); // Resultado: ["h", "o", "l", "a"]
  console.log(convertirArray("javascript")); // Resultado: ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

  const tienePermisoCerveza = function(nombre, edad) {
    if (edad >= 18) {
      return `${nombre} tiene permiso para tomar cerveza.`;
    } else {
      return `${nombre} no tiene permiso para tomar cerveza.`;
    }
  }
  
  // Ejemplo de uso
  console.log(tienePermisoCerveza("Juan", 25)); // Resultado: "Juan tiene permiso para tomar cerveza."
  console.log(tienePermisoCerveza("María", 16)); // Resultado: "María no tiene permiso para tomar cerveza."
  