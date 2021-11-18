import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getBeer } from '../API';

import NoImageAvailable from '../assets/no-image-available.jpg';

import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import ProductInfo from './ProductInfo';
import NotFound from './NotFound';

const Beer = () => {
  const { beerId } = useParams();
  const [currentBeer, setCurrentBeer] = useState([]);
  const [error, setError] = useState(false);

  // Initial loading
  useEffect(() => {
    // Fetch beer information
    const fetchBeer = async () => {
      try {
        setError(false);
        const beer = await getBeer(beerId);
        setCurrentBeer(beer);
      } catch (error) {
        setError(true);
      }
    };
    fetchBeer();
  }, [beerId]);

  return (
    <>
      <div className='mx-7 mb-20 xl:mx-32 2xl:mx-52'>
        <Header />
        {error && <div>Oops something happened!</div>}
        <div>
          {currentBeer.length ? (
            currentBeer.map((beer) => (
              <div key={beer.id}>
                <div className='mb-10'>
                  <Breadcrumb beerName={beer.name} />
                </div>
                <ProductInfo
                  imageUrl={beer.image_url ? beer.image_url : NoImageAvailable}
                  name={beer.name}
                  tagline={beer.tagline}
                  description={beer.description}
                  alcoholByVolume={beer.abv}
                  firstBrewed={beer.first_brewed}
                />
              </div>
            ))
          ) : (
            <NotFound />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Beer;
