import { useEffect, useState } from 'react';
import { getBeersList } from '../API';
import { isPersistedState } from '../helpers';
import Header from './Header';
import Footer from './Footer';
import SearchBar from './SearchBar';
import Grid from '../components/Grid';
import Product from '../components/Product';
import LoadingButton from './LoadingButton';
import Spinner from './Spinner';
import ScrollToTopButton from './ScrollToTopButton';
import NoImageAvailable from '../assets/no-image-available.jpg';

const initialState = {
  beers: [],
  page: 1,
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState(false);

  // Fetch list of beers
  const fetchBeers = async (page, searchTerm = '') => {
    try {
      setIsLoading(true);
      setError(false);

      const currentBeers = await getBeersList(page, searchTerm);
      // Check if data is exhausted
      setState((previousState) => ({
        ...previousState,
        beers:
          page > 1
            ? [...previousState.beers, ...currentBeers]
            : [...currentBeers],
      }));

      setIsLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  // Initial loading
  useEffect(() => {
    if (!searchTerm) {
      // Check for existing session storage key
      const sessionState = isPersistedState('homeState');
      if (sessionState) {
        setState(sessionState);
        return;
      }
    }
    setState(initialState);
    fetchBeers(1, searchTerm);
  }, [searchTerm]);

  // Load more
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchBeers(state.page + 1, searchTerm);
    setState((previousState) => ({
      ...previousState,
      page: previousState.page + 1,
    }));
    setIsLoadingMore(false);
  }, [searchTerm, state.page, isLoadingMore]);

  // Write to session storage
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state));
  }, [searchTerm, state]);

  return (
    <>
      <div className='mx-7 xl:mx-32 2xl:mx-52'>
        <Header />
        {error && <div>Oops something happened!</div>}
        <div className='mb-6'>
          <SearchBar setSearchTerm={setSearchTerm} />
        </div>
        <Grid>
          {state.beers.map((beer) => (
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
