import CategoryContext from '../components/CategoryInfo/CategoryContext';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { getData } from '../utils/apiUtils';

function MyApp({ Component, pageProps, apiData }) {
  return (
    <CategoryContext.Provider value={apiData}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CategoryContext.Provider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const categories = await getData('https://api.publicapis.org/categories');
  const entries = await getData('https://api.publicapis.org/entries');
  return { apiData: { categories: categories, entries: entries } };
};

export default MyApp;
