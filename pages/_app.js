import CategoryContext from '../components/CategoryInfo/CategoryContext';
import Layout from '../components/Layout';
import '../styles/globals.css';

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
  const res = await fetch('https://api.publicapis.org/categories');
  const categories = await res.json();
  const entriesRes = await fetch('https://api.publicapis.org/entries');
  const entries = await entriesRes.json();
  return { apiData: { categories: categories, entries: entries } };
};

export default MyApp;
