import { useState } from 'react';
import styles from '../../styles/SurpriseMe.module.css';
import { getLiveData } from '../../utils/apiUtils';
import PrimaryButton from '../Button';
import Card from '../Card/Card';

export default function SurpriseMe() {
  const [isSurpriseMeVisible, setSurpriseMeVisibile] = useState(false);
  const [data, setData] = useState({});

  const handleOnSurpriseClick = async () => {
    const randomData = await getLiveData('https://api.publicapis.org/random');

    setData(randomData);
    if (!isSurpriseMeVisible) {
      setSurpriseMeVisibile(!isSurpriseMeVisible);
    }

  };
  return (
    <div className={styles.surpriseMe}>
      {isSurpriseMeVisible && (
        <div className={styles.grid}>
          <Card data={data.entries[0]} />
        </div>
      )}

      <PrimaryButton onClick={handleOnSurpriseClick} text="Surprise Me !" />
    </div>
  );
}
