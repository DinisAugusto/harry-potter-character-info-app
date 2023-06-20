import { Link } from "react-router-dom";
import styles from './Header.module.css';

export function Header(){
    return(
        <header className={styles.header}>
            <Link to="/">
                <img src="../harry-potter-logos.png" alt="Harry Potter Logo Png" />
            </Link>
        </header>
    )
}