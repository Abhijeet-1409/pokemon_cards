import React from 'react';
import styles from './Header.module.css'; 
import logo from '../../../public/International_Pokémon_logo.svg'; 
const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="pokemon-show-image" className={styles.image} />
    </header>
  );
};

export default Header;
