

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs')
require('colors');


console.log(argv);


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))
