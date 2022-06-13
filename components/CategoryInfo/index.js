import { Fragment } from 'react';
import styles from '../../styles/Category.module.css';
import Card from '../Card/Card';

export default function CategoryInfo({ data }) {
  return (
    <Fragment>
      {Boolean(data.length) && <div>{data.length} Result found!</div>}
      <div className={styles.grid}>
        {data.map((d, index) => {
          return <Card key={`entries_${index}`} data={d} />;
        })}
      </div>
    </Fragment>
  );
}
