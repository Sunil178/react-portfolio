import styles from '../styles/navbar.module.css';
import Link from "next/link";
import { useState } from "react";
import NavItem from './NavItem';
import Button from './Button';
import Image from 'next/image';

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className='header'>
      <nav className={styles['nav']}>
        <Link href={"/"}>
          <a>
            {/* <h1 className={styles["logo"]}>Portfolio</h1> */}
            <Image
              src="/prog_logo.png"
              width={80}
              height={80}
              alt='logo'
            />
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles['nav__menu-bar']}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? styles.active : ""} ${styles['nav__menu-list']}`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
          <Button data="Download Resume"/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;