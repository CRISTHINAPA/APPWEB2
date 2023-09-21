//OBJETO DEFINIDO POR LA ENTIDAD "ALERGIAS"
const alergias = [
    { id: 1, descripcion:'Polvo'},
    { id: 2, descripcion:'Pelo de gato'},
    { id: 3, descripcion:'Nuez'},
    { id: 4, descripcion:'Picadura de abeja'},
    { id: 5, descripcion:'Polen'},  
  ];
//OBJETO DEFINIDO POR LA ENTIDAD "CONTROL DE ALERGIAS"
  const controldealergias = [
  { id: 1, idAlergia: 2, fecha: '2002-01-10', hora: '13:00', costo: 15 },
  { id: 2, idAlergia: 1, fecha: '2002-06-10', hora: '14:00', costo: 12 },
  { id: 3, idAlergia: 3, fecha: '2023-03-04', hora: '15:00', costo: 8 },
  { id: 4, idAlergia: 5, fecha: '2011-11-11', hora: '16:00', costo: 20 },
  { id: 5, idAlergia: 4, fecha: '2022-12-12', hora: '17:00', costo: 16 }
  ];
//OBJETO DEFINIDO POR LA ENTIDAD "ID PACIENTES"
  const idPacientesControlAlergias = [
      { idPaciente: 1, idControlAlergia: 1, fecha: '2002-01-10', hora: '13:00', costo: 15 },
      { idPaciente: 2, idControlAlergia: 2, fecha: '2002-06-10', hora: '14:00', costo: 12 },
      { idPaciente: 3, idControlAlergia: 3, fecha: '2023-03-04', hora: '15:00', costo: 8 },
      { idPaciente: 4, idControlAlergia: 4, fecha: '2011-11-11', hora: '16:00', costo: 20 },
      { idPaciente: 5, idControlAlergia: 5, fecha: '2022-12-12', hora: '17:00', costo: 16 }    
  ];

//SE CREA LA FUNCIÓN A USAR PARA EXPORTAR Y MOSTRAR DENTRO DE NUESTRO INDEX
  function mostrarRegistrodepacientes(idPacientesControlAlergias, fecha, hora, costo) {
    console.log('\nRegistro de Pacientes:\n');
    //SE USA EL CICLO FOR OF 
    for (const registro of idPacientesControlAlergias) {
      const paciente = pacientes.find(p => p.idPaciente === registro.idPaciente);
      const control = controldealergias.find(c => c.id === registro.idControlAlergia);
  
      console.log(`• Id del Paciente: ${registro.idPaciente}`);
      console.log(`  Nombre del Paciente: ${paciente.nombre}`);
      console.log(`  Fecha del Control: ${control.fecha}`);
      console.log(`  Hora del Control: ${control.hora}`);
      console.log(`  Costo del Control: $${control.costo}\n`);
    }
}
// SE CREA LA FUNCION PARA MOSTRAR DESCRIPCIONES DE CONTROLES DE ALERGIA
function mostrarDescripcion(registro, controldealergias) {
  console.log('\nControl de Alergias:\n');
 // UTILIZAMOS UN BUCLE FOR...OF PARA RECORRER LOS REGISTROS 
  for (const registros of registro) {
    const control = controldealergias.find(c => c.id === registros.idControlAlergia);
    
    if (control) {
      console.log(`• ID del Registro: ${registros.id}`);
      console.log(`   Fecha del Control: ${control.fecha}`);
      console.log(`   Hora del Control: ${control.hora}`);
      console.log(`   Costo del Control: $${control.costo}\n`);
    }
  }
}
{
// LLAMAMOS LA FUNCION Y PASAMOS LOS DATOS
mostrarDescripcion(registro, controldealergias);
}
//CREAMOS LA FUNCIÓN QUE VAMOS A USAR PARA EXPORTAR Y MOSTRAR DENTRO DE NUESTRO INDEX
function mostrarRegistrodepacientes(paciente, fecha, hora) {
    console.log('\n Idioma y Registros Realizados: \n');
    //SE USA UN CICLO FOR EACH PARA RECORRER LOS REGISTROS
  registro.forEach((registros) => {
    const control = controldealergias.find(c => c.id === registros.idControlAlergia);
    
    if (idiomas && control) {
      console.log(`  Fecha del Control de Alergia: ${control.fecha}`);
      console.log(`  Hora del Control de Alergia: ${control.hora}`);
      console.log(`  Costo del Control de Alergia: $${control.costo}\n`);
    }
  });
  }

module.exports = {
    mostrarRegistrodepacientes,
    mostrarDescripcion,
    mostrarIdPacientes,
    fecha,
    hora,
    };