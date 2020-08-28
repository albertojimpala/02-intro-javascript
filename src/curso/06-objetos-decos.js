const persona = {
    nombre: 'Tony ',
    app: 'montana',
    ciudad: 'apaseo'
}



const usuarioContexto = ({ nombre, ciudad = 'celaya' }) => {

    return {
        nombre: nombre,
        ciudad: ciudad,
        objeto: {
            lat: 1212,
            lon: 1233
        }
    }
}


const { nombre, ciudad, objeto: { lat, lon } } = usuarioContexto(persona);


console.log(nombre, ciudad);
console.log(lat, lon);