import  { createContext, useState, useMemo,useEffect } from "react";
import { usePokemons } from "../hooks/usePokemon";

export const AppContext = createContext({
  page : 0,
  error : {},
  offset : 0,
  search : "",
  totalPage : 0,
  loading : true,
  setPage : ()=>{},
  pokemonGrid : [],
  setOffset : ()=>{},
  setSearch : ()=>{},
});


export default function AppContextProvider({ children }) {
  const [page,setPage] = useState(0);
  const [offset, setOffset] = useState(4);
  const [search, setSearch] = useState("");
  const [totalPage,setTotalPage] = useState(0);
  const {loading,pokemons,error} = usePokemons();
  const [pokemonGrid, setPokemonGrid] = useState([]);
  
  useEffect(() => {
    const changePokemonGrid = (pageSize, subString) => {
      let filterList = subString.length > 0
      ? pokemons.filter(pok => pok.name.startsWith(subString))
      : pokemons;
      let grid = [];
      for (let i = 0; i < filterList.length; i += pageSize) {
        grid.push(filterList.slice(i, i + pageSize));
      }
      setPokemonGrid(grid);
      setTotalPage(grid.length);
    };
    changePokemonGrid(offset, search);
  }, [offset,search,pokemons]);


  const ctxValue = useMemo(
    () => ({
      page,
      error,
      offset,
      search,
      loading,
      setPage,
      setOffset,
      setSearch,
      totalPage,
      pokemonGrid,
    }),
    [offset,search,loading,error,pokemonGrid,totalPage,page]
  );

  return (
    <AppContext.Provider value={ctxValue}>
      {children}
    </AppContext.Provider>
  );
}
