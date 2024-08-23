import './App.css'
import { usePokemons } from './hooks/usePokemon';
import Loader from './components/loader/loader';
function App() {
  const {loading,pokemons,error} = usePokemons();

  if (loading) {
    console.log("Loading");
    return <Loader/>;
  }
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div>
      
    </div>
  );
}

export default App
