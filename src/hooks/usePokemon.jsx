import { useState, useEffect } from 'react';
import { createPokemon } from '../pokemon_utilities/pokemon_utilities';

export const usePokemons = () => {
  const [error, setError] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokemonDataList, setPokemonDataList] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPokemonDataList(data.results);
        localStorage.setItem("pokemonDataList", JSON.stringify(data.results));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    const data = localStorage.getItem("pokemonDataList");
    if (!data) {
      fetchPokemons();
    } else {
      setPokemonDataList(JSON.parse(data));
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const pokemonInstances = localStorage.getItem("pokemonInstances");

    if (!pokemonInstances && pokemonDataList.length > 0) {
      const pokemonPromises = pokemonDataList.map((pokemonJson) => {
        return createPokemon(pokemonJson);
      });
      Promise.all(pokemonPromises)
        .then(pokemonObjList => {
          localStorage.setItem("pokemonInstances", JSON.stringify(pokemonObjList));
          setPokemons(pokemonObjList);
        })
        .catch(error => {
          setError(error);
          console.error('Error creating Pokémon:', error);
        }).finally(() => {
          setLoading(false);
        });
    } else if (pokemonInstances) {
      setPokemons(JSON.parse(pokemonInstances));
      setLoading(false);
    }
  }, [pokemonDataList]);

  return { pokemons, loading, error };
}
