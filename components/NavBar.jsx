import styles from "../styles/NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">Randycodes</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/design">DESIGNS</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
