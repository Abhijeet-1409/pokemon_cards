import styles from './searchBar.module.css';
import { useContext, useRef } from 'react';
import { AppContext } from '../../context/app_context';
export default function SearchBar({ }) {
   const inputRef = useRef();
   const { setOffset, setSearch,setPage } = useContext(AppContext);

   const handleInputChange = () => {
      const value = inputRef.current?.value.trim().replace(" ","-");
      setSearch(value);
      setPage(0);
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
            <option value="8">8</option>
            <option value="12">12</option>
         </select>
         <input ref={inputRef} onChange={handleInputChange} type="text" name="search_box" id={styles.search_box} />
      </div>
   );
}