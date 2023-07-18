// Lista de contactos
let contactos = [];

// Función para crear un nuevo contacto
function crearContacto(id, nombres, apellidos, telefono, ciudad, direccion) {
  let nuevoContacto = {
    id: id,
    nombres: nombres,
    apellidos: apellidos,
    telefono: telefono,
    ubicaciones: {
      ciudad: ciudad,
      direccion: direccion
    }
  };
  contactos.push(nuevoContacto);
}

// Función para eliminar un contacto por su ID
function eliminarContacto(id) {
  contactos = contactos.filter(contacto => contacto.id !== id);
}

// Ejemplo de uso
crearContacto(1, "Juan", "Pérez", "123456789", "Ciudad Ejemplo", "Calle Principal 123");
crearContacto(2, "María", "López", "987654321", "Otra Ciudad", "Avenida Secundaria 456");
console.log(contactos);

eliminarContacto(1);
console.log(contactos);
