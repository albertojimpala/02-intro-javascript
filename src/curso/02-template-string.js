const c_name = 'alberto';
const c_lastname = 'jimenez';

const c_nombre = `${c_name} ${c_lastname}`;


function getNombre(nombre) {
    return (`mi nombre es ${nombre}`);
}


console.log(`hola ${getNombre(c_nombre)}`);