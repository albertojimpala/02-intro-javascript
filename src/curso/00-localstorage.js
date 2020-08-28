// local storage 
// guardar y leer datos 
localStorage.setItem('Micasa', 'apaseo');
localStorage.setItem('prueba', 'apaseo');
const ubicacion = localStorage.getItem('Micasa');

console.log(ubicacion);
//remover llave
localStorage.removeItem('prueba');
//limpiar storage
localStorage.clear();



// guardar objeto jso en el localstore
const objeto = {
        name: 'Alberto',
        age: '26'
    }
    // convertir a string es lo que recibe
const jsonObjeto = JSON.stringify(objeto);


localStorage.setItem('Objeto', jsonObjeto);

const log = JSON.parse(localStorage.getItem('Objeto'));

console.log(log);