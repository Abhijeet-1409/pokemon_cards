import styles from './searchBar.module.css';
import { useContext, useRef } from 'react';
import { AppContext } from '../../context/app_context';
export default function SearchBar({ }) {
   const inputRef = useRef();
   const { setOffset, setSearch,setPage } = useContext(AppContext);

   const handleInputChange = () => {
      const value = inputRef.current?.value.trim();
      setSearch(value);
   };

   const handleSelectChange = (event) => {
      const value = Number(event.target.value);
      setOffset(value);
      setPage(0);
   };

   return (
      <div className={styles.search_div}>
         <select name="offset" id={styles.offset} onChange={handleSelectChange}>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
         </select>
         <input ref={inputRef} onChange={handleInputChange} type="text" name="search_box" id={styles.search_box} />
      </div>
   );
}