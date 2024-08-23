import './App.css'
import { usePokemons } from './hooks/usePokemon';
import Loader from './components/loader/loader';
import Error from './components/error/error';
function App() {
  const {loading,pokemons,error} = usePokemons();

  if (loading) {
    return <Loader/>;
  }
  if (error) {
    return <Error message={error.message}/>;
  }

  return (
    <div>

    </div>
  );
}

export default App
