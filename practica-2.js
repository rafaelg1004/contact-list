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
// Función para actualizar un contacto por su ID
function actualizarContacto(id, nuevosDatos) {
    let contacto = contactos.find(contacto => contacto.id === id);
    if (contacto) {
      Object.assign(contacto, nuevosDatos);
    } else {
      console.log("Contacto no encontrado.");
    }
  }

// Ejemplo de uso
crearContacto(1, "Juan", "Pérez", "123456789", "Ciudad Ejemplo", "Calle Principal 123");
crearContacto(2, "María", "López", "987654321", "Otra Ciudad", "Avenida Secundaria 456");
console.log(contactos);

eliminarContacto(1);
console.log(contactos);
actualizarContacto(2, {
    nombres: "Pedro",
    apellidos: "González",
    telefono: "555-5555",
    ubicaciones: {
      ciudad: "Otra Ciudad",
      direccion: "Nueva Dirección 789"
    }
  });
  
  console.log("Lista de contactos después de actualizar un contacto:");
  console.log(contactos);