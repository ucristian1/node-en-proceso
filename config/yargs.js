const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea en proceso'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Descripción de la tarea en proceso'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento en proceso', {
        descripcion

    })


.command('Actualizar', 'Actualizar el estado completo de una tarea', {
    descripcion,
    completado

})

.command('borrar', 'borrar una tarea', {
        descripcion

    })
    .help()
    .argv;

module.exports = {
    argv
}