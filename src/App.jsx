import './App.css'
import { usePokemons } from './hooks/usePokemon';
function App() {
  const {loading,pokemons,error} = usePokemons();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>
            {pokemon.name}
          </li>
        )).slice(0, 10)}
      </ul>
    </div>
  );
}

export default App
