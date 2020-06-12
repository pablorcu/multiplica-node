// al inicio se acostumbra indicar todos los recursos que se necesita (requireds)
const fs = require('fs');
//tipo des requireds hay tres:
//const fs = require('fs'); uno que es de un proyecto propio de node
//const fs = require('express'); esta no es una libreria que viene en node son paquetes 
//que se instalan para utilizarlos, es decir codigos de terceros 
//const fs = require('./fs'); lo requerimientos de archivos que nosotros creamos en el proyecto se utiliza
//./<path>

let base = 3;

let data = '';

for ( let i = 1; i <= 10; i++ ){
    data += `${ base } x ${ i } = ${ base * i }\n`;
}
//console.log(data);

fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
    
    if (err) throw err;

    console.log(`El archivo tabla-${ base }.txt a sido creado`);
});

console.log(module);
