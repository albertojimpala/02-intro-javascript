const personajes = ['alfa', 'omega', 'beta'];

const [p1] = personajes;


console.log(p1);

const retornaArray = () => {

    return ['abc', 123]
}

//const [letras, numeros] = retornaArray();

const useState = (valor) => {
    return [valor, () => { console.log('holo'); }]

}

const [nombre, setNombre] = useState('mio');


console.log(nombre);
setNombre();