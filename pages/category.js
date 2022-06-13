import { Fragment, useContext, useState } from 'react';
import CategoryInfo from '../components/CategoryInfo';
import CategoryContext from '../components/CategoryInfo/CategoryContext';
import style from '../styles/Category.module.css';

export default function Category() {
  const apiData = useContext(CategoryContext);
  const { categories, entries } = apiData;
  const [data, setData] = useState([]);

  const handleCategoryOnSelect = (e) => {
    const selectedCategory = e.target.value;
    const selectedEntries = entries.entries.filter(
      (e) => e.Category === selectedCategory
    );

    setData(selectedEntries);
  };

  return (
    <Fragment>
      <div className={style.wrapper}>
        <div className={style.title}>Choose a category..</div>
        <select
          className={style.categorySelect}
          onChange={handleCategoryOnSelect}
        >
          <option>select</option>
          {categories.categories.map((category, index) => {
            return (
              <option key={`cat_${index}_${category}`} value={category}>
                {category}
              </option>
            );
          })}
        </select>
        <CategoryInfo data={data} />
      </div>
    </Fragment>
  );
}
