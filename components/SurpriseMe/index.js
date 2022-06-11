import { useState } from 'react';
import styles from '../../styles/SurpriseMe.module.css';
import SurpriseMeButton from './button';

export default function SurpriseMe() {
  const [isSurpriseMeVisible, setSurpriseMeVisibile] = useState(false);
  const handleOnSurpriseClick = () => {
    if (!isSurpriseMeVisible) {
      setSurpriseMeVisibile(!isSurpriseMeVisible);
    }
  };
  return (
    <div className={styles.surpriseMe}>
      {isSurpriseMeVisible && (
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>
              1inch <code className={styles.code}>/Cryptocurrency</code>
            </h2>
            <p>API for querying decentralize exchange</p>
            <ul role="list">
              <li data-icon="✴️">Auth: Unknown</li>
              <li data-icon="✴️">HTTPS: True</li>
              <li data-icon="✴️">Cors: Unknown</li>
            </ul>
          </a>
        </div>
      )}

      <SurpriseMeButton onClick={handleOnSurpriseClick} />
    </div>
  );
}
