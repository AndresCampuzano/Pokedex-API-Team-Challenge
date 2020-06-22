import React from 'react';

// Icons
import search from '../assets/images/Search.svg';

const Filters = () => {
  return (
    <>
      <div className='filters'>
        <div className='wrapper'>
          <div className='container'>
            <div className='filters-grid'>
              <div className='filters-search'>
                <input type='text' placeholder='Search for Pokemon...' />
                <img src={search} alt='search' />
              </div>
              <div className='filters-curiosities'>
                <p>CURIOSITIES</p>
              </div>
              <div className='filters-all'>
                <p>SHOW ALL</p>
              </div>
              <div className='filters-bug'>
                <p>BUG</p>
              </div>
              <div className='filters-dark'>
                <p>DARK</p>
              </div>
              <div className='filters-dragon'>
                <p>DRAGON</p>
              </div>
              <div className='filters-electric'>
                <p>ELECTRIC</p>
              </div>
              <div className='filters-fairy'>
                <p>FAIRY</p>
              </div>
              <div className='filters-fighting'>
                <p>FIGHTING</p>
              </div>
              <div className='filters-fire'>
                <p>FIRE</p>
              </div>
              <div className='filters-flying'>
                <p>FLYING</p>
              </div>
              <div className='filters-ghost'>
                <p>GHOST</p>
              </div>
              <div className='filters-normal'>
                <p>NORMAL</p>
              </div>
              <div className='filters-poison'>
                <p>POISON</p>
              </div>
              <div className='filters-psychic'>
                <p>PSYCHIC</p>
              </div>
              <div className='filters-rock'>
                <p>ROCK</p>
              </div>
              <div className='filters-steel'>
                <p>STEEL</p>
              </div>
              <div className='filters-water'>
                <p>WATER</p>
              </div>
              <div className='filters-grass'>
                <p>GRASS</p>
              </div>
              <div className='filters-ground'>
                <p>GROUND</p>
              </div>
              <div className='filters-ice'>
                <p>ICE</p>
              </div>
            </div>
            {/* <div className='filters-top'>
              <div className='filters--input-search'>
                <input type='text' placeholder='Search for Pokemon' />
                <img src={search} alt='search' />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
