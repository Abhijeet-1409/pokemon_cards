import './App.css';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './context/app_context';
import Loader from './components/loader/loader';
import Error from './components/error/error';
import Header from './components/header/Header';
import SearchBar from './components/search_bar/searchBar';
import CardDisplay from './components/card_display/card_display';
import PaginationButtons from './components/pagination_buttons/pagination_buttons';
function App() {
  const { loading,error } = useContext(AppContext);
  
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <>
      <Header />
      <SearchBar />
      <CardDisplay />
      <PaginationButtons/>
    </>
  );
}

export default App;
