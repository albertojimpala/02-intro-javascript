import { heroes } from '../data/heroes'



const getHeroById = (id) => heroes.find((heroe) => heroe.id === id);



const getHeroByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

export default { getHeroById, getHeroByOwner };