import styles from '../../styles/Button.module.css';

export default function PrimaryButton({ onClick, text }) {
    return (
        <button className={styles.primaryBtn} onClick={onClick}>
            {text}
        </button>
    );
}
