import React from 'react';

import Intro from './Intro';
import Cards from './Cards';

const Home = () => {
  return (
    <div>
      <Intro />
      <Cards className='container' />
    </div>
  );
};

export default Home;
