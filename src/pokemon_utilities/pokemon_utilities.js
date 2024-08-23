import { Pokemon } from "./pokemon";

export const createPokemon = ({ name, url }) => {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const { stats, types, height, weight, sprites, abilities } = data;
            const pokemonInstance = new Pokemon(url, name, height, weight);
            pokemonInstance.setTypes(types);
            pokemonInstance.setStats(stats);
            pokemonInstance.setSprites(sprites);
            pokemonInstance.setAbilities(abilities);
            return pokemonInstance;
        })
        .catch(error => {
            console.error('Error creating Pokémon:', error);
            throw error; 
        });
}




  
  