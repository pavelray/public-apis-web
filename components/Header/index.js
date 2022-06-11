import NextImage from 'next/image';
import NextLink from 'next/link';
import styles from '../../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NextImage
          src="https://codetheweb.blog/assets/img/icon2.png"
          width={80}
          height={80}
        />
      </div>

      <nav>
        <ul>
          <li>
            <NextLink href="#">Home</NextLink>
          </li>
          <li>
            <NextLink href="#">Categories</NextLink>
          </li>
          <li>
            <NextLink href="#">About</NextLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
