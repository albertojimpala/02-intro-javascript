const api_key = 'ZWpuAhBD0QA0azi9tzwYSoQF3g0ocBJ9';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

peticion.then(respuesta => respuesta.json())
    .then(({ data }) => {

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);


    })
    .catch(console.warn);