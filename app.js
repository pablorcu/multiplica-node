const argv = require('./config/yargs').argv;
//const colors = require('colors');
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch( comando ){

    case 'listar':
        listarTabla(argv.base, argv.limite);
        //console.log('Listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ',colors.green( archivo ))
            //console.log('Archivo creado: ' + `${ archivo }`.green)
            //console.log(`Archivo creado: ${ archivo.green }`)
            )
            .catch(e => console.log(e));
        //console.log('Crear');
        break;

    default:
        console.log('Comando no reconocido');
        break;

}


//console.log(argv2);


