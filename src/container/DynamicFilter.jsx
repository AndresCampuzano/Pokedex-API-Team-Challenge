import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header.jsx';
import HeaderMobile from '../components/HeaderMobile.jsx';

import Item from '../components/Item.jsx';

import Filters from '../components/Filters.jsx';

import FloatingCircle from '../components/FloatingCircle.jsx';

const DynamicFilter = props => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [menu, SetMenu] = useState(false);

  useEffect(() => {
    fetch(
      `https://pokdex-master-devs.uc.r.appspot.com/api/pokemon/?page=${count}&limit=10&type=${props.match.params.dynamicFilter}`
    )
      .then(response => response.json())
      .then(response =>
        setData({
          error: response.error,
          status: response.status,
          body: response.body
        })
      )
      .catch(e => console.log(e));
  }, [count, props.match.params.dynamicFilter]);

  const handleNext = () => {
    setCount(count + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleClickFloatingCircle = () => {
    SetMenu(!menu);
  };

  return (
    <>
      <Header />
      <HeaderMobile />

      <span className='margin ShowOnMobile' />
      <span className='margin-desktop HideOnMobile' />

      <Filters />
      <main className='wrapper-itemsHome'>
        {data.body
          ? data.body.map((items, i) => {
              return <Item key={i} {...items} />;
            })
          : 'Loading...'}
      </main>
      <div onClick={handleClickFloatingCircle}>
        <FloatingCircle />
      </div>
      {menu ? (
        <>
          <div
            className='popUp-mobileMenu--BG'
            onClick={handleClickFloatingCircle}
          ></div>
          <div className='popUp-mobileMenu'>
            <Link onClick={() => SetMenu(false)} to='/'>
              <div className='popUp-mobileMenu--btnAlone color-dark'>
                SHOW ALL
              </div>
            </Link>
            <div className='popUp-mobileMenu--grid'>
              <Link onClick={() => SetMenu(false)} to='/bug'>
                <div className='popUp-mobileMenu--grid--item color-green'>
                  BUG
                </div>
              </Link>
              <Link onClick={() => SetMenu(false)} to='/dark'>
                <div className='popUp-mobileMenu--grid--item color-dark'>
                  DARK
                </div>
              </Link>
              <Link onClick={() => SetMenu(false)} to='/dragon '>
                <div className='popUp-mobileMenu--grid--item color-blue'>
                  DRAGON
                </div>
              </Link>
              <Link onClick={() => SetMenu(false)} to='/electric'>
                <div className='popUp-mobileMenu--grid--item color-yellow'>
                  ELECTRIC
                </div>
              </Link>
              <Link onClick={() => SetMenu(false)} to='/fairy'>
                <div className='popUp-mobileMenu--grid--item color-purple'>
                  FAIRY
                </div>
              </Link>
              <Link onClick={() => SetMenu(false)} to='/fighti ng'>
                <div className='popUp-mobileMenu--grid--item color-red'>
                  FIGHTING
                </div>
              </Link>
              <Link onClick={() => SetMenu(false)} to='/fire'>
                <div className='popUp-mobileMenu--grid--item color-yellow'>
                  FIRE
                </div>
              </Link>
              <Link onClick={() => SetMenu(false)} to='/flying '>
                <div className='popUp-mobileMenu--grid--item color-blue'>
                  FLYING
                </div>
              </Link>
              <Link onClick={() => SetMenu(false)} to='/ghost'>
                <div className='popUp-mobileMenu--grid--item color-purple'>
                  GHOST
                </div>
              </Link>
              <Link onClick={() => SetMenu(false)} to='/grass'>
                <div className='popUp-mobileMenu--grid--item color-green'>
                  GRASS
                </div>
              </Link>
              <Link onClick={() => SetMenu(false)} to='/ground '>
                <div className='popUp-mobileMenu--grid--item color-green'>
                  GROUND
                </div>
              </Link>
              <Link onClick={() => SetMenu(false)} to='/ice'>
                <div className='popUp-mobileMenu--grid--item color-blue'>
                  ICE
                </div>
              </Link>
              <Link onClick={() => SetMenu(false)} to='/normal '>
                <div className='popUp-mobileMenu--grid--item color-dark'>
                  NORMAL
                </div>
              </Link>
              <Link onClick={() => SetMenu(false)} to='/poison '>
                <div className='popUp-mobileMenu--grid--item color-purple'>
                  POISON
                </div>
              </Link>
              <Link onClick={() => SetMenu(false)} to='/psychi c'>
                <div className='popUp-mobileMenu--grid--item color-red'>
                  PSYCHIC
                </div>
              </Link>
              <Link onClick={() => SetMenu(false)} to='/rock'>
                <div className='popUp-mobileMenu--grid--item color-red'>
                  ROCK
                </div>
              </Link>
              <Link onClick={() => SetMenu(false)} to='/steel'>
                <div className='popUp-mobileMenu--grid--item color-yellow'>
                  STEEL
                </div>
              </Link>
              <Link onClick={() => SetMenu(false)} to='/water'>
                <div className='popUp-mobileMenu--grid--item color-blue'>
                  WATER
                </div>
              </Link>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
      <button
        onClick={handleNext}
        type='button'
        aria-label='next'
        className='btn-next-back'
      >
        next
      </button>
    </>
  );
};

export default DynamicFilter;
