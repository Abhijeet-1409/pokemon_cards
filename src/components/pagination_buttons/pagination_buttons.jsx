import { useContext } from "react";
import styles from "./pagination_buttons.module.css";
import { AppContext } from "../../context/app_context";

export default function PaginationButtons() {
    const { page, totalPage, setPage } = useContext(AppContext);
     
    const handleClick = (event) => {
       const text = event.target.innerText;
       setPage((currentPage)=>{ 
            return currentPage += text === "<" ? -1 : 1;;
       });
    }

    return (
        <div className={styles.container}>
            <button 
                className={styles.button} 
                onClick={handleClick}
                disabled={page === 0}
            >
                &lt;
            </button>
            <span className={styles.pageInfo}>{`${page + 1} / ${totalPage}`}</span>
            <button 
                className={styles.button} 
                onClick={handleClick}
                disabled={page === totalPage - 1}
            >
                &gt;
            </button>
        </div>
    );
}
