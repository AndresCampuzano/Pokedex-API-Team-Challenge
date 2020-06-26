import React from 'react';
import { Link } from 'react-router-dom';

// Icon
import pokeballIcon from '../assets/images/Pokeball.svg';
import search from '../assets/images/Search.svg';

const HeaderMobile = () => {
  return (
    <>
      <header className='header-mobile ShowOnMobile'>
        <div className='header-mobile--title'>
          <Link to='/'>
            <img src={pokeballIcon} alt='Pokemon icon' />
          </Link>
          <Link to='/'>
            <h1>Pokedex</h1>
          </Link>
        </div>
        <div className='header-mobile--search'>
          <label htmlFor='search' className='color-text-white'>
            .
          </label>
          <input
            type='text'
            placeholder='Search for Pokemon...'
            id='search-mobile'
          />
          <img src={search} alt='Search icon' name='pokemon' id='pokemon' />
        </div>
        <div className='header-mobile--curiosities'>
          <button type='button' aria-label='curiosities'>
            <Link to='/curiosities'>
              <p>CURIOSITIES</p>
            </Link>
          </button>
        </div>
      </header>
    </>
  );
};

export default HeaderMobile;
