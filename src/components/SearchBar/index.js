import React, { useEffect, useState, useRef } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const initialRender = useRef(true);
  const [state, setState] = useState('');

  useEffect(() => {
    // Skip initial useEffect render
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <div className='flex gap-4'>
      <input
        type='text'
        placeholder='Search Beer 🍺'
        onChange={(event) => setState(event.currentTarget.value)}
        value={state}
        className='py-3 px-4 text-xl text-center w-full rounded bg-gray-100 focus:outline-none'
      />
    </div>
  );
};

export default SearchBar;
