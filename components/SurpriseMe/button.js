import styles from '../../styles/SurpriseMe.module.css';

export default function SurpriseMeButton({ onClick }) {
  return (
    <button className={styles.surpriseMeBtn} onClick={onClick}>
      Surprise Me !
    </button>
  );
}
