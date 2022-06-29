import NextImage from 'next/image';
import NextLink from 'next/link';
import { useState } from 'react';
import styles from '../../styles/Header.module.css';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  return (
    <header className={styles.header}>
      <NextLink href="/">
        <div className={styles.logo}>
          <span>Public</span>
          <NextImage
            src="/logo.png"
            width={60}
            height={60}
            className={styles.logoImage}
          />
          <span>Web</span>
        </div>
      </NextLink>
      <nav className={styles.desktopMenu}>
        <ul>
          <li>
            <NextLink href="/">Home</NextLink>
          </li>
          <li>
            <NextLink href="/category">Categories</NextLink>
          </li>
        </ul>
      </nav>
      <div className={styles.mobileMenu}>
        <MobileMenu openMenu={openMenu} closeMenu={closeMenu} showMenu={showMenu} />
      </div>
    </header>
  );
}
