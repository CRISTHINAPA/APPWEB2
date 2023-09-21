//SE DEFINE EL OBJETO POR LA ENTIDAD "ALERGIA"
const alergias = [
  { id: 1, nombre: 'Polen', tratamiento: 'Antihistamínicos', idUsuario: 101 },
  { id: 2, nombre: 'Pelo de gato', tratamiento: 'Esteroides', idUsuario: 102 },
  { id: 3, nombre: 'Nuez', tratamiento: 'Evitar contacto', idUsuario: 103 },
  { id: 4, nombre: 'Polvo', tratamiento: 'Antihistamínicos', idUsuario: 101 },
  { id: 5, nombre: 'Picadura de abeja', tratamiento: 'Epinefrina', idUsuario: 104 }
];

// OBJETO DEFINIDO POR LA ENTIDAD "CONTROL DE ALERGIAS"
const controlesAlergias = [
  { id: 1, idAlergia: 2, fecha: '2002-01-10', hora: '13:00', costo: 15 },
  { id: 2, idAlergia: 1, fecha: '2002-06-10', hora: '14:00', costo: 12 },
  { id: 3, idAlergia: 3, fecha: '2023-03-04', hora: '15:00', costo: 8 },
  { id: 4, idAlergia: 5, fecha: '2011-11-11', hora: '16:00', costo: 20 },
  { id: 5, idAlergia: 4, fecha: '2022-12-12', hora: '17:00', costo: 16 }
];

// FUNCIÓN PARA MOSTRAR CONTROL DE ALERGIAS
function mostrarControlDeAlergias(controles, alergias) {
  console.log('\n          ---CONTROL DE ALERGIAS--- \n');
  for (const control of controles) {
    const alergia = alergias.find(al => al.id === control.idalergia);
    console.log(`   • Nombre de Alergia: ${alergia.nombre}
        Tratamiento: ${alergia.tratamiento}
        Fecha: ${control.fecha} 
        Hora: ${control.hora} 
        Costo: ${control.costo}`);
  }

// FUNCIÓN PARA MOSTRAR PACIENTES Y CONTROL DE ALERGIAS
function mostrarPacientesYControlAlergias(alergias, controlesAlergias) {
    console.log('\n          ---PACIENTES Y CONTROL DE ALERGIAS--- \n');
    controlesAlergias.forEach((control) => {
      const alergia = alergias.find(al => al.id === control.idalergia);
      console.log(`   • Alergia: ${alergia.nombre}
          Id Alergias: ${alergia.id}
          Tratamiento: ${alergia.tratamiento}
          Id Usuario: ${alergia.idUsuario}`);
    });
  }
  // EXPORTAMOS LAS FUNCIONES Y OBJETOS PARA USAR EN OTRO LUGAR
    module.exports = {
    mostrarControlDeAlergias,
    mostrarPacientesYControlAlergias,
    controlesAlergias,
    alergias,
  }