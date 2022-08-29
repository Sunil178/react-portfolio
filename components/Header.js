import React, { useState } from "react";
import Link from 'next/link';
import styles from './header.module.css';
import { navLinks } from "../pages/api/data";
import { Button } from "./Button/Button";
import { GiHamburgerMenu } from "react-icons/gi";

// import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className={styles['main-nav']}>
        {/* 1st logo part  */}
        <div className={styles.logo}>
          <h2>
            <span>A</span>nnu
            <span>P</span>oddar
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? `${styles['menu-link']} ${styles['mobile-menu-link']}` : styles['menu-link']
          }>
            <ul>
           {navLinks.map((link, index) => {
          return (
              <li>
                <Link href={link.path}>{link.name}</Link>
              </li>
          );
        })}
        <Button text = "Download Resume"/>
            </ul>
        </div>

        {/* 3rd social media links */}
        
        <div className={styles["social-media"]}>
          {/* hamburget menu start  */}
          <div className={styles["hamburger-menu"]}>
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;