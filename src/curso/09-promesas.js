import heroes from "./curso/08 imp-array"

const HeruePromesa = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const h = heroes.getHeroById(id);
            if (h) {
                resolve(h);
            } else {
                reject('no existe el herue');
            }

        }, 2000)
    });
}

HeruePromesa(2)
    .then(console.log)
    .catch(console.warn);