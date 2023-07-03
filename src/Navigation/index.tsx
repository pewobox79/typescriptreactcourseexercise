import {NavLink} from "react-router-dom";
import styles from './styles/Navigation.module.css'

export default function Navigation(){
    return(
        <nav className={styles.navigation}>
            <ul>
                <li className={styles.navItem}>
                <NavLink to={"/"} className={styles.navItemLink}>Home</NavLink>
                </li><li className={styles.navItem}>
                <NavLink to={"/todos"} className={styles.navItemLink}>Todos</NavLink>
                </li>
            </ul>
        </nav>
    )
}