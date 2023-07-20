import styles from '../styles/navbar.module.css';
import Button from "./Button";
import Image from "next/image";

const Navbar = () => {
  return (
  <div className={styles['nav']}>
    <div className={styles['logo']}>
      <Image
        src="/logo.png"
        width={90}
        height={80}
        alt="logo img"
      />
    </div>
    <div className={styles["nav_items"]}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Projects</li>
        <Button data="Download Resume"/>
      </ul>
    </div>
  </div>
  );
};

export default Navbar;