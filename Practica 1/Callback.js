//variable para  llamar los datos de el archivo Datos.js
var llamada = require('./datos');

// Función para buscar una alergia por ID
function busquedaAlergiaporID(id, callback) {
    // Encuentra la alergia con el ID especificado
    const alergia = llamada.Alergias.find((alergia) => alergia.id === id);
  
    if (!alergia) {
      const error = new Error();
      error.message = `La alergia con ID ${id} no pudo ser encontrada`;
      return callback(error);
    }
  
    return callback(null, alergia);
  }
  
  // Función para buscar un registro por ID
  function busquedaRegistroporID(id, callback) {
    // Encuentra el registro con el ID especificado
    const registro = llamada.Registro.find((registro) => registro.id === id);
  
    if (!registro) {
      const error = new Error();
      error.message = `El registro con ID ${id} no existe`;
      return callback(error);
    }
  
    return callback(null, registro);
  }
  
  // Llamada para buscar una alergia por ID
  busquedaAlergiaporID(1, (err, alergia) => {
    if (err) {
      console.log(err.message);
      return;
    }
  
    // Llamada para buscar un registro por el ID de registro almacenado en el objeto de alergia
    busquedaRegistroporID(alergia.idregistro, (err, registro) => {
      if (err) {
        console.log(err.message);
        return;
      }
      // Agrega el objeto de registro al objeto de alergia
      alergia.registro = registro;
      // Elimina la propiedad idregistro del objeto de alergia
      delete alergia.idregistro;
      console.log(alergia);
    });
  });
  