const fs = require('fs');

let listadoEnProceso = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoEnProceso);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se puedo grabar, err');

    });
}

const cargarDB = () => {

    try {

        listadoEnProceso = require('../db/data.json');

    } catch (err) {
        listadoEnProceso = [];
    }
}


const crear = (descripcion) => {

    cargarDB();

    let EnProceso = {
        descripcion,
        completado: false
    };

    listadoEnProceso.push(EnProceso);

    guardarDB();

    return EnProceso;
}

const getListado = () => {
    cargarDB();
    return listadoEnProceso;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoEnProceso.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoEnProceso[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoEnProceso.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoEnProceso.length === nuevoListado.length) {
        return false;
    } else {
        listadoEnProceso = nuevoListado;
        guardarDB();
        return true;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar

}