import { Fragment } from 'react';
import styles from '../../styles/Layout.module.css';
import Header from '../Header';

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <div className={styles.container}>{children}</div>
    </Fragment>
  );
}
