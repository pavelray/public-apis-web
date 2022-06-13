import styles from '../../styles/Card.module.css';

export default function Card({ data }) {
  return (
    <a
      href={data?.Link}
      className={styles.card}
      target="_blank"
      rel="noreferrer"
    >
      <h2>
        {data?.API} <code className={styles.code}>/{data?.Category}</code>
      </h2>
      <p>{data?.Description || 'No description available'}</p>
      <ul role="list">
        <li data-icon="✴️">Auth: {data?.Auth || 'unknown'}</li>
        <li data-icon="✴️">HTTPS: {data?.HTTPS.toString() || 'unknown'}</li>
        <li data-icon="✴️">Cors: {data?.Cors || 'unknown'}</li>
      </ul>
    </a>
  );
}
