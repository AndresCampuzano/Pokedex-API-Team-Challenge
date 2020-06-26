import React from 'react';
import Header from '../components/Header.jsx';

import Strongest from '../components/Strongest.jsx';
import Weakest from '../components/Weakest.jsx';
import MaybeLegendary from '../components/MaybeLegendary.jsx';

const Curiosities = () => {
  return (
    <>
      <div className='curiosities'>
        <Header />
        <span className='margin-desktop HideOnMobile' />
        <span className='margin-desktop HideOnMobile' />
        <span className='margin-desktop HideOnMobile' />
        <div className='wrapper-itemsHome curiosities--title'>
          <h1>Curiosities</h1>
          <p>
            This is a list of Pokémon in the order dictated by the National
            Pokédex, meaning that Pokémon from the Kanto region will appear
            first, followed by those from Johto, Hoenn, Sinnoh, Unova, Kalos,
            Alola, and Galar.
          </p>
        </div>
        <div className='wrapper-itemsHome'>
          <h2>Top strongest Pokemons</h2>
        </div>
        <main className='wrapper-itemsHome'>
          <Strongest />
        </main>
        <div className='wrapper-itemsHome'>
          <h2>Top weakest Pokemons</h2>
        </div>
        <main className='wrapper-itemsHome'>
          <Weakest />
        </main>
        <div className='wrapper-itemsHome'>
          <h2>Top MaybeLegendary Pokemons</h2>
        </div>
        <main className='wrapper-itemsHome'>
          <MaybeLegendary />
        </main>
      </div>
    </>
  );
};

export default Curiosities;
