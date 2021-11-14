import { useEffect, useState } from 'react/cjs/react.development';
import { getBeersList } from '../API';
import Grid from '../components/Grid';
import Product from '../components/Product';
import Button from './Button';
import Spinner from './Spinner';
import NoImageAvailable from '../assets/no-image-available.jpg';

const Home = () => {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  // Fetch list of beers
  const fetchBeers = async (page) => {
    try {
      setIsLoading(true);
      setError(false);
      const beers = await getBeersList(page);
      setBeers((previousBeers) => [...previousBeers, ...beers]);
      setIsLoading(false);
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
          <Product
            key={beer.id}
            beerId={beer.id}
            imageUrl={beer.image_url ? beer.image_url : NoImageAvailable}
            title={beer.name}
          />
        ))}
      </Grid>
      {!isLoading ? (
        <Button text='Load More' callback={() => setIsLoadingMore(true)} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Home;
