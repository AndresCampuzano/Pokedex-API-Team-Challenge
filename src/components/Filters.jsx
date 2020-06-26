import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import search from '../assets/images/Search.svg';

const Filters = () => {
  return (
    <>
      <div className='filters HideOnMobile'>
        <div className='wrapper'>
          <div className='container'>
            <div className='filters-grid'>
              <div className='filters-search'>
                <label htmlFor='search' className='color-text-white'>
                  .
                </label>
                <input
                  type='text'
                  placeholder='Search for Pokemon...'
                  id='search'
                />
                <img src={search} alt='search' />
              </div>
              <div className='filters-curiosities pulse'>
                <Link to='/curiosities'>
                  <p>CURIOSITIES</p>
                </Link>
              </div>
              <div className='filters-all'>
                <Link to='/'>
                  <p className='color-text-white'>SHOW ALL</p>
                </Link>
              </div>
              <div className='filters-bug'>
                <Link to='/bug'>
                  <p className='color-text-white'>BUG</p>
                </Link>
              </div>
              <div className='filters-dark'>
                <Link to='/dark'>
                  <p className='color-text-white'>DARK</p>
                </Link>
              </div>
              <div className='filters-dragon'>
                <Link to='/dragon'>
                  <p className='color-text-white'>DRAGON</p>
                </Link>
              </div>
              <div className='filters-electric'>
                <Link to='/electric'>
                  <p className='color-text-white'>ELECTRIC</p>
                </Link>
              </div>
              <div className='filters-fairy'>
                <Link to='/fairy'>
                  <p className='color-text-white'>FAIRY</p>
                </Link>
              </div>
              <div className='filters-fighting'>
                <Link to='/fighting'>
                  <p className='color-text-white'>FIGHTING</p>
                </Link>
              </div>
              <div className='filters-fire'>
                <Link to='/fire'>
                  <p className='color-text-white'>FIRE</p>
                </Link>
              </div>
              <div className='filters-flying'>
                <Link to='/flying'>
                  <p className='color-text-white'>FLYING</p>
                </Link>
              </div>
              <div className='filters-ghost'>
                <Link to='/ghost'>
                  <p className='color-text-white'>GHOST</p>
                </Link>
              </div>
              <div className='filters-normal'>
                <Link to='/normal'>
                  <p className='color-text-white'>NORMAL</p>
                </Link>
              </div>
              <div className='filters-poison'>
                <Link to='/poison'>
                  <p className='color-text-white'>POISON</p>
                </Link>
              </div>
              <div className='filters-psychic'>
                <Link to='/psychic'>
                  <p className='color-text-white'>PSYCHIC</p>
                </Link>
              </div>
              <div className='filters-rock'>
                <Link to='/rock'>
                  <p className='color-text-white'>ROCK</p>
                </Link>
              </div>
              <div className='filters-steel'>
                <Link to='/steel'>
                  <p className='color-text-white'>STEEL</p>
                </Link>
              </div>
              <div className='filters-water'>
                <Link to='/water'>
                  <p className='color-text-white'>WATER</p>
                </Link>
              </div>
              <div className='filters-grass'>
                <Link to='/grass'>
                  <p className='color-text-white'>GRASS</p>
                </Link>
              </div>
              <div className='filters-ground'>
                <Link to='/ground'>
                  <p className='color-text-white'>GROUND</p>
                </Link>
              </div>
              <div className='filters-ice'>
                <Link to='/ice'>
                  <p className='color-text-white'>ICE</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
