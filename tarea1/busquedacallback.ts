// exportamos los arreglos a traves de la funcion require encontrada en el archivo datos.js 
var datos = require('./datos');
//Creamos una funcion asincronica de callback para poder buscar la alergia
function buscaralergia(id, callback){
    const alergia = datos.alergia.find((alergia)=> alergia.id==id );
    if (!alergia)
    {
        const error= new Error();
        error.message="Alergia no encontrado";
        return callback(error);
    }
    return callback(null, alergia );
}
//Creamos una funcion asincronica de callback para poder buscar el dato de la control realizado.
function buscarcontrol(id, callback){
    const controles = datos.controlrealizado.find((controles)=>{
        return controles.id==id;
    });
    if (!controles)
    {
        const error =  new Error();
        error.message= "Control realizada no encontrada";
        return callback(error)
    }
    return callback(null, controles)
}

buscaralergia(3, (err, alergias)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    buscarcontrol(alergias.id, (err, alergias)=>{
        if (err)
        {
            return console.log(err.message);
        }
        //guardamos los datos del arreglo control realizado en el arreglo de controles.
        alergias.controles = controles; 
        //borramos el dato almacenado en alergias.id
        delete alergias.id;
        //mostramos el dato del arreglo de alergias
        console.log(alergias);
    } )
})