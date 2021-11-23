import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// Assets
import NoImageAvailable from '../assets/no-image-available.jpg';
// API
import { getBeer } from '../API';
// Components
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
      <div id='content' className='mx-7 mb-20 xl:mx-32 2xl:mx-52'>
        <Header />
        {error && <NotFound />}
        <div>
          {currentBeer.map((beer) => (
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
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Beer;
