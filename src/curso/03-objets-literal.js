const person = {
    nombre: 'tony',
    apellido: 'montana',
    edad: 33,
    direccion: {
        ciudad: 'habana',
        lat: 12.1231,
        log: 102.123
    }


}

/// asignar el objeto creando uno nuevo
const person2 = {...person }
person2.nombre = 'alberto';

console.table(person);
console.table(person2);