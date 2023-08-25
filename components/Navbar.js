import styles from '../styles/navbar.module.css';
import Link from "next/link";
import { useEffect, useState } from "react";
import NavItem from './NavItem';
import Button from './Button';
import Image from 'next/image';
import { PropaneSharp } from '@mui/icons-material';
import { Switch } from '@mui/material';

const MENU_LIST = [
  { text: "Home", href: "#" },
  { text: "About Us", href: "#about" },
  { text: "Contact", href: "#contact" },
  { text: "Project", href: "#project" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [theme, setTheme] = useState('dark-theme');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  const changeTheme = () => setTheme(theme == 'dark-theme' ? 'light-theme' : 'dark-theme');

  return (
    <header className='header'>
      <nav className={styles['nav']}>
        <Link href={"/"}>
          <a>
            <Image
              src="/lg.png"
              width={100}
              height={100}
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
        <input onClick={() => changeTheme()} type="checkbox" id="checkbox" className={styles.checkbox} />
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