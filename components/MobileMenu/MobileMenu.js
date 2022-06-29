import Link from 'next/link';
import { Fragment } from 'react';
import styles from '../../styles/MobileMenu.module.css';

export default function MobileMenu({ openMenu, closeMenu, showMenu }) {
    const getMenuClassName = () => {
        if (showMenu) {
            return `${styles.overlay} ${styles.showMenu}`
        }
        return `${styles.overlay} ${styles.hideMenu}`
    }
    return (
        <Fragment>
            <div id="myNav" className={getMenuClassName()}>
                <a href="javascript:void(0)" className={styles.closebtn} onClick={closeMenu}>&times;</a>
                <div className={styles.overlayContent}>
                    <Link href="/">Home</Link>
                    <Link href="/category">Category</Link>
                </div>
            </div>
            <span className={styles.menuIcon} onClick={openMenu}>&#9776;</span>
        </Fragment>
    )
}
