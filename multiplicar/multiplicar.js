const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base no es un número`);
        };

        if (!Number(limite)) {
            reject('El limite no es un número');
        };

        console.log(`==================================`.green);
        console.log(`       tabla del ${base}`.green);
        console.log(`==================================`.green);


        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        }

        resolve(data);
    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject('El limite no es un número');
        };

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`El archivo tabla-${base}.txt ${colors.green('ha sido creado')}`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}