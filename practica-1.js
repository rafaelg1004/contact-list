// Lista de contactos predefinidos
let contactos = [
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily Davis",
  ];
  
  // Función para añadir un nuevo contacto a la lista
  function agregarContacto(nombre) {
    contactos.push(nombre);
  }
  
  // Función para borrar un contacto existente de la lista
  function borrarContacto(nombre) {
    let indice = contactos.indexOf(nombre);
    if (indice !== -1) {
      contactos.splice(indice, 1);
    }
  }
  
  // Función para imprimir los contactos en la consola
  function imprimirContactos() {
   alert("Lista de contactos:");
    for (let i = 0; i < contactos.length; i++) {
      alert(contactos[i]);
    }
  }
  
  // Ejemplo de uso
  agregarContacto("Sarah Johnson");
  agregarContacto("Robert Smith");
  
  imprimirContactos();
  
  borrarContacto("John Doe");
  
  imprimirContactos();
  