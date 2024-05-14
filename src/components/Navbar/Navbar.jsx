import styles from "./Navbar.module.css";
import {getImageUrl} from "../../util.js";

export const Navbar = () => {
  return (
    <nav className={styles.navbar} >
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={getImageUrl("nav/menuIcon.png")}  />
        <ul className={styles.menuItems}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Expperience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
