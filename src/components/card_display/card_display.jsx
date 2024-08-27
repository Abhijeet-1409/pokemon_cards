import { useContext } from "react";
import styles from "./card_display.module.css";
import { AppContext } from "../../context/app_context";

export default function CardDisplay() {
    const {page,pokemonGrid} = useContext(AppContext);
    const filteredPokemons = pokemonGrid[page];
    console.log(filteredPokemons);
    return (
        <div>
  
        </div>
    );
}