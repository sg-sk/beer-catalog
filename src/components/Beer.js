import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getBeer } from '../API';

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
        console.log(beer);
      } catch (error) {
        setError(true);
      }
    };
    fetchBeer();
  }, [beerId]);

  return <></>;
};

export default Beer;
