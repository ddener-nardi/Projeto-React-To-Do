import styles from "./Header.module.css";
import Rocket from "../assets/rocket.svg";

export function Header(){
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <img src={Rocket} />
                <h1>
                    <span>to</span>
                    <span>do</span>
                </h1>
            </div>
        </header>
    );
}