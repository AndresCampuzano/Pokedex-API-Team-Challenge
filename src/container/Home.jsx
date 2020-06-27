import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Arrows Buttons next - back
import nextArrow from '../assets/images/keyboard_arrow_right-24px.svg';
import backArrow from '../assets/images/keyboard_arrow_left-24px.svg';

// Components
import Header from '../components/Header.jsx';
import HeaderMobile from '../components/HeaderMobile.jsx';
import Filters from '../components/Filters.jsx';
import Item from '../components/Item.jsx';
import FloatingCircle from '../components/FloatingCircle.jsx';

const Home = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [menu, SetMenu] = useState(false);

  useEffect(() => {
    fetch(
      `https://pokdex-master-devs.uc.r.appspot.com/api/pokemon?page=${count}&limit=20`
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
  }, [count]);

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
      <div onClick={handleClickFloatingCircle}>
        <FloatingCircle />
      </div>
      <main className='wrapper-itemsHome'>
        {data.body
          ? data.body.map((items, i) => {
              return <Item key={i} {...items} page={count} />;
            })
          : 'Loading...'}
      </main>
      <div className='flex-btn HideOnMobile'>
        {count > 1 ? (
          <button
            onClick={() => setCount(count - 1)}
            type='button'
            aria-label='back'
            className='btn-next-back'
            // backButton
          >
            <img src={backArrow} alt='next button' /> back
          </button>
        ) : (
          ''
        )}
        <button
          onClick={handleNext}
          type='button'
          aria-label='next'
          className='btn-next-back'
          // nextButton
        >
          next <img src={nextArrow} alt='next button' />
        </button>
      </div>
      <div className='ShowOnMobile'>
        {count > 1 ? (
          <button
            onClick={() => setCount(count - 1)}
            type='button'
            aria-label='back page'
            className='btn-back-mobile'
            // backButton
          >
            <img src={backArrow} alt='next button' />
          </button>
        ) : (
          ''
        )}
        <button
          onClick={handleNext}
          type='button'
          aria-label='next page'
          className='btn-next-mobile'
          // nextButton
        >
          <img src={nextArrow} alt='next button' />
        </button>
      </div>
      {menu ? (
        <>
          <div
            className='popUp-mobileMenu--BG'
            onClick={handleClickFloatingCircle}
          ></div>
          <div className='popUp-mobileMenu'>
            <Link to='/'>
              <div className='popUp-mobileMenu--btnAlone color-dark'>
                ALL TYPES
              </div>
            </Link>
            <div className='popUp-mobileMenu--grid'>
              <Link to='/bug' onClick={() => SetMenu(false)}>
                <div className='popUp-mobileMenu--grid--item color-green'>
                  BUG
                </div>
              </Link>
              <Link to='/dark'>
                <div className='popUp-mobileMenu--grid--item color-dark'>
                  DARK
                </div>
              </Link>
              <Link to='/dragon'>
                <div className='popUp-mobileMenu--grid--item color-blue'>
                  DRAGON
                </div>
              </Link>
              <Link to='/electric'>
                <div className='popUp-mobileMenu--grid--item color-yellow'>
                  ELECTRIC
                </div>
              </Link>
              <Link to='/fairy'>
                <div className='popUp-mobileMenu--grid--item color-purple'>
                  FAIRY
                </div>
              </Link>
              <Link to='/fighting'>
                <div className='popUp-mobileMenu--grid--item color-red'>
                  FIGHTING
                </div>
              </Link>
              <Link to='/fire'>
                <div className='popUp-mobileMenu--grid--item color-yellow'>
                  FIRE
                </div>
              </Link>
              <Link to='/flying'>
                <div className='popUp-mobileMenu--grid--item color-blue'>
                  FLYING
                </div>
              </Link>
              <Link to='/ghost'>
                <div className='popUp-mobileMenu--grid--item color-purple'>
                  GHOST
                </div>
              </Link>
              <Link to='/grass'>
                <div className='popUp-mobileMenu--grid--item color-green'>
                  GRASS
                </div>
              </Link>
              <Link to='/ground'>
                <div className='popUp-mobileMenu--grid--item color-green'>
                  GROUND
                </div>
              </Link>
              <Link to='/ice'>
                <div className='popUp-mobileMenu--grid--item color-blue'>
                  ICE
                </div>
              </Link>
              <Link to='/normal'>
                <div className='popUp-mobileMenu--grid--item color-dark'>
                  NORMAL
                </div>
              </Link>
              <Link to='/poison'>
                <div className='popUp-mobileMenu--grid--item color-purple'>
                  POISON
                </div>
              </Link>
              <Link to='/psychic'>
                <div className='popUp-mobileMenu--grid--item color-red'>
                  PSYCHIC
                </div>
              </Link>
              <Link to='/rock'>
                <div className='popUp-mobileMenu--grid--item color-red'>
                  ROCK
                </div>
              </Link>
              <Link to='/steel'>
                <div className='popUp-mobileMenu--grid--item color-yellow'>
                  STEEL
                </div>
              </Link>
              <Link to='/water'>
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
    </>
  );
};

export default Home;
