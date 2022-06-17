import Link from "next/link";
import React from "react";
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="">tokoku</a>
      <ul className={styles.links}>
        <li>
          <Link href="/home">
            {/* <a>home</a> */}
            home
          </Link>
        </li>
        <li>
          <Link href="/product">
            <a>product</a>
          </Link>
        </li>
        {/* <li></li>
    <li></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
