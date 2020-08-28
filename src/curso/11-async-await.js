const getImagen = async() => {

    try {
        const api_key = 'ZWpuAhBD0QA0azi9tzwYSoQF3g0ocBJ9';

        const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
        const { data } = await respuesta.json()
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error);

    }


}

getImagen();