// requireds
const fs = require('fs');
const { yargs } = require('yargs');
const colors = require('colors')

let listarTabla = (base, limite) => {

    console.log('=================='.green);
    console.log(`tabla de ${ base }`);
    console.log('=================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`)
    }


}


let crearArchivo = (base =5, listar = false, hasta = 10) => {

    return new Promise((resolve, reject) => {

        if (listar) {
            listarTabla(base, hasta); 
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }


        fs.writeFile(`./output/tabla-${ base }-al-${ limite }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);

        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}