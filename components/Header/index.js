import NextImage from 'next/image';
import NextLink from 'next/link';
import styles from '../../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <NextLink href="/">
        <div className={styles.logo}>
          <span>Free</span>
          <NextImage
            src="/logo.png"
            width={60}
            height={60}
          />
          <span>Web</span>
        </div>
      </NextLink>
      <nav>
        <ul>
          <li>
            <NextLink href="/">Home</NextLink>
          </li>
          <li>
            <NextLink href="/category">Categories</NextLink>
          </li>
          <li>
            <NextLink href="/about">About</NextLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
