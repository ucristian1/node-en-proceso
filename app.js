// Declaramos una constante

const argv = require('./config/yargs').argv;
const colors = require('colors');

const EnProceso = require('./en-proceso/en-proceso');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = EnProceso.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        let listado = EnProceso.getListado();

        for (let tarea of listado) {
            console.log('===En proceso==='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completada);
            console.log('=========='.blue);
        }


        break;

    case 'actualizar':

        let actualizar = EnProceso.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;

    case 'borrar':
        let borrado = EnProceso.borrar(argv.descripcion);
        console.log(borrado);


    default:
        console.log('El comando no es reconocido');

}