import { useState } from 'react';
import styles from '../../styles/SurpriseMe.module.css';
import Card from '../Card/Card';
import SurpriseMeButton from './button';

export default function SurpriseMe() {
  const [isSurpriseMeVisible, setSurpriseMeVisibile] = useState(false);
  const [data, setData] = useState({});

  const handleOnSurpriseClick = () => {
    fetch('https://api.publicapis.org/random')
      .then((res) => res.json())
      .then((randomData) => {
        setData(randomData);
        if (!isSurpriseMeVisible) {
          setSurpriseMeVisibile(!isSurpriseMeVisible);
        }
      });
  };
  return (
    <div className={styles.surpriseMe}>
      {isSurpriseMeVisible && (
        <div className={styles.grid}>
          <Card data={data.entries[0]} />
        </div>
      )}

      <SurpriseMeButton onClick={handleOnSurpriseClick} />
    </div>
  );
}
