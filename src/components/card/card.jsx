import { useState } from "react";
import styles from "./card.module.css";
import CardInfo from "../card_info/card_info";

export default function Card({ pokemon }) {
    const [open,setOpen] = useState(false);
    
    const toggleCardInfo = ()=> {
        setOpen((prevOpen) => !prevOpen);
    }

    return (
        <>     
        <CardInfo open={open} pokemon={pokemon} closeCardInfo={toggleCardInfo}/>
        <div className={styles.card} onClick={toggleCardInfo}>
            <img src={pokemon.sprites[0]} alt="pokemon-image" loading="lazy"/>
            <p>{pokemon.name.replace("-"," ")}</p>
            <div>
                <ul>
                    {pokemon.stats.map((stat) => (
                        <li key={stat.name}>
                            <span>{stat.name.replace("-"," ")}</span>
                            <span>{stat.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    );
}
