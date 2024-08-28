import { useEffect, useRef } from "react";
import styles from "./card_info.module.css";
import { createPortal } from "react-dom";

export default function CardInfo({ open, pokemon, closeCardInfo }) {
    const dialogRef = useRef();

    useEffect(() => {
        if (open) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [open]);

    return createPortal(
        <dialog ref={dialogRef} className={styles.dialog}>
            <div className={styles.container}>
                <div className={styles.image_col}>
                    <img src={pokemon.sprites[1]} alt="pokemon-gif" />
                </div>
                <div className={styles.details_col}>
                    <h2>{pokemon.name.replace("-", " ")}</h2>
                    <h2>{`height : ${pokemon.height} , weight : ${pokemon.weight}`}</h2>
                    <h2>Stats</h2>
                    <ul>
                        {pokemon.stats.map((stat) => (
                            <li key={stat.name}>
                                <span>{stat.name.replace("-", " ")}</span>
                                <span>{stat.value}</span>
                            </li>
                        ))}
                    </ul>
                    <h2>Abilities</h2>
                    <ul>
                        {pokemon.abilities.map((ability) => (
                            <li key={ability}>
                                <span>{ability}</span>
                            </li>
                        ))}
                    </ul>
                    <h2>Type</h2>
                    <ul>
                        {pokemon.types.map((type) => (
                            <li key={type}>
                                <span>{type}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <button className={styles.close_button} onClick={closeCardInfo}>X</button>
        </dialog>,
        document.getElementById("modal")
    );
}
