import './App.css'
import { usePokemons } from './hooks/usePokemon';
import Loader from './components/loader/loader';
import Error from './components/error/error';
import Header from './components/header/Header';
import SearchBar from './components/search_bar/searchBar';
function App() {
  const {loading,pokemons,error} = usePokemons();
  if (loading) {
    return <Loader/>;
  }
  if (error) {
    return <Error message={error.message}/>;
  }
   
  return (
    <>
      <Header/>
      <SearchBar/>
    </>
  );
}

export default App
