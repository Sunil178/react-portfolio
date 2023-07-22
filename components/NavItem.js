import styles from '../styles/navbar.module.css';
import Link from "next/link";
import Button from './Button';

const NavItem = ({ text, href, active }) => {
    return (
      <Link href={href}>
        <a
          className={`${styles.nav__item} ${active ? styles.active : ""}`}
        >
          {text}
        </a>

      </Link>
        
    );
  };

export default NavItem;