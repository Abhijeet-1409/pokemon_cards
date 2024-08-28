import React from 'react';
import styles from './header.module.css'; 
import logo from '/International_Pokémon_logo.svg'; 
const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="pokemon-show-image" className={styles.image} />
    </header>
  );
};

export default Header;
