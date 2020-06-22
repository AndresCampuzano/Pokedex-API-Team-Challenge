import React from 'react';
import { Link } from 'react-router-dom';

// Icon
import pokeballIcon from '../assets/images/Pokeball.svg';

const Header = props => {
  return (
    <>
      <header className='header mobile'>
        <div className='wrapper'>
          <div className='container'>
            <div className='header--title'>
              <div className='header--title--logo'>
                <Link to='/'>
                  <img src={pokeballIcon} alt='Pokedex icon' />
                </Link>
              </div>
              <div className='header--tittle--text'>
                <Link to='/'>
                  <h2>Pokedex</h2>
                </Link>
              </div>
            </div>
            <div className='credits'>
              <p>About</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
