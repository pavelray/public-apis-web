import { Fragment, useState } from 'react';
import CategoryInfo from '../components/CategoryInfo';
import CategoryContext from '../components/CategoryInfo/CategoryContext';
import style from '../styles/Category.module.css';
import { getData } from '../utils/apiUtils';

export default function Category({ apiData }) {
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
    <CategoryContext.Provider value={apiData}>
      <Fragment>
        <div className={style.wrapper}>
          <div className={style.title}>Choose a category..</div>
          <select
            className={style.categorySelect}
            onChange={handleCategoryOnSelect}
          >
            <option>Select</option>
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
    </CategoryContext.Provider>
  );
}

export const getServerSideProps = async (ctx) => {
  const categories = await getData('https://api.publicapis.org/categories');
  const entries = await getData('https://api.publicapis.org/entries');
  return { props: { apiData: { categories: categories, entries: entries } } };
};

