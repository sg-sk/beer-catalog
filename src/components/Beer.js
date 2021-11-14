import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { getBeer } from '../API';

const Beer = () => {
  const { beerId } = useParams();

  // Fetch beer information
  const fetchBeer = async () => {
    try {
      const beer = await getBeer(beerId);
      console.log(beer);
    } catch (error) {
      console.log(error);
    }
  };

  // Initial loading
  useEffect(() => {
    fetchBeer();
  });

  return <></>;
};

export default Beer;
