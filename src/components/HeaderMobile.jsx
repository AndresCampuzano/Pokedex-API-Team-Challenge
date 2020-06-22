import React from 'react';
// import { Link } from 'react-router-dom';

// Icon
import pokeballIcon from '../assets/images/Pokeball.svg';
import search from '../assets/images/Search.svg';

const HeaderMobile = () => {
  return (
    <>
      <header className='header-mobile ShowOnMobile'>
        <div className='header-mobile--title'>
          <img src={pokeballIcon} alt='Pokemon icon' />
          <h1>Pokedex</h1>
        </div>
        <div className='header-mobile--search'>
          <input type='text' placeholder='Search for Pokemon...' />
          <img src={search} alt='Search icon' name='pokemon' id='pokemon' />
        </div>
        <div className='header-mobile--curiosities'>
          <button>CURIOSITIES</button>
        </div>
      </header>
    </>
  );
};

export default HeaderMobile;
