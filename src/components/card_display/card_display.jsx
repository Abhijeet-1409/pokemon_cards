import { useContext ,useEffect} from "react";
import styles from "./card_display.module.css";
import { AppContext } from "../../context/app_context";
import Card from "../card/card";

export default function CardDisplay() {
    const { page, pokemonGrid , totalPage} = useContext(AppContext);
    const filteredPokemons = pokemonGrid[page];
    useEffect(() => {
        const container = document.querySelector(`.${styles.container}`);
        if (container) {
            container.scrollTop = 0; 
        }
    }, [page]); 
    return (
        <div className={styles.container}>
            {totalPage == 0 && <h1>No pokemon found</h1> }
            {(totalPage > 0 && filteredPokemons?.length) && filteredPokemons.map((pokemon) => (
                <Card key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
}
