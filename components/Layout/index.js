import Head from 'next/head';
import { Fragment } from 'react';
import styles from '../../styles/Layout.module.css';
import CONSTANTS from '../../utils/constants';
import Footer from '../Footer';
import Header from '../Header';

export default function Layout({ children }) {
  return (
    <Fragment>
      <Head>
        <title>{CONSTANTS.APP.TITLE}</title>
        <meta name="description" content={CONSTANTS.APP.DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.banner}>
        <span>Public APIs Situation</span>
        <a href='https://github.com/public-apis/public-apis/issues/3104' target="_blank" rel="noreferrer">[READ THIS ISSUE PLEASE]</a>
      </div>
      <div className={styles.container}>{children}</div>
      <Footer />
    </Fragment>
  );
}
