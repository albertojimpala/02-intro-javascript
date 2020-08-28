// funcion normal 
const saludo = function(nombre) {
    return `Hoa ${nombre}`;
}

//funcion flecha
const sal = (nombre) => {
    return `Hoa 2 ${nombre}`
}


console.log(saludo('mio'));
console.log(sal('x'));


//flecha mas objeto
const getUser = () => ({
    user: 'user123',
    pass: 'class123'
})


const user = getUser();

console.log(user);


const userActivo = (nombre) => ({
    uuid: '12123123sd',
    nombre: nombre

});

console.log(userActivo('alberto'));