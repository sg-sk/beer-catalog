import { useEffect, useState } from 'react/cjs/react.development';
import { getBeersList } from '../API';
import Grid from '../components/Grid';
import Product from '../components/Product';
import Button from './Button';

const Home = () => {
  const [beers, setBeers] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  // Fetch list of beers
  const fetchBeers = async (page) => {
    try {
      setError(false);
      const beers = await getBeersList(page);
      setBeers((previousBeers) => [...previousBeers, ...beers]);
    } catch (error) {
      setError(true);
    }
  };

  // Initial loading
  useEffect(() => {
    fetchBeers(1);
  }, []);

  // Load more
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchBeers(page + 1);
    setPage((previousPage) => previousPage + 1);
    setIsLoadingMore(false);
  }, [page, isLoadingMore]);

  return (
    <>
      <Grid>
        {beers.map((beer) => (
          <Product key={beer.id} imageUrl={beer.image_url} title={beer.name} />
        ))}
      </Grid>
      <Button text='Load More' callback={() => setIsLoadingMore(true)} />
    </>
  );
};

export default Home;
