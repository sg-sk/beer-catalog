import { useEffect, useState } from 'react/cjs/react.development';
import { getBeersList } from '../API';
import Header from './Header';
import Footer from './Footer';
import Grid from '../components/Grid';
import Product from '../components/Product';
import LoadingButton from './LoadingButton';
import Spinner from './Spinner';
import ScrollToTopButton from './ScrollToTopButton';
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
      <div className='mx-7 xl:mx-32 2xl:mx-52'>
        <Header />
        {error && <div>Oops something happened!</div>}
        <Grid>
          {beers.map((beer) => (
            <Product
              key={beer.id}
              beerId={beer.id}
              imageUrl={beer.image_url ? beer.image_url : NoImageAvailable}
              title={beer.name}
              alcoholByVolume={beer.abv}
            />
          ))}
        </Grid>
        <div className='flex justify-center my-7'>
          {!isLoading ? (
            <LoadingButton
              text='Load More'
              callback={() => setIsLoadingMore(true)}
            />
          ) : (
            <Spinner />
          )}
        </div>
      </div>
      <div className='flex justify-end'>
        <ScrollToTopButton />
      </div>
      <Footer />
    </>
  );
};

export default Home;
