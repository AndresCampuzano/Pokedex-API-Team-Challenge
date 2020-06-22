import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

// Components
import Header from '../components/Header.jsx';
import HeaderMobile from '../components/HeaderMobile.jsx';
import Filters from '../components/Filters.jsx';
import ItemHome from '../components/ItemHome.jsx';
import FloatingCircle from '../components/FloatingCircle.jsx';

const Home = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);

  // console.log('error: ', data.error);
  // console.log('status: ', data.status);
  // console.log('body: ', data.body);

  // console.log(count);

  // console.log(props);

  useEffect(() => {
    fetch(
      `https://pokdex-master-devs.uc.r.appspot.com/api/pokemon/?page=${count}`
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

  return (
    <>
      <Header />
      <HeaderMobile />
      <span className='margin ShowOnMobile' />
      <span className='margin-desktop HideOnMobile' />
      <Filters />
      <FloatingCircle />
      <LazyLoad height={200}>
        <main className='wrapper-itemsHome'>
          {data.body
            ? data.body.map((items, i) => {
                return <ItemHome key={i} {...items} page={count} />;
              })
            : 'Loading...'}
        </main>
      </LazyLoad>
      {count > 1 ? (
        <button onClick={() => setCount(count - 1)}>back</button>
      ) : (
        ''
      )}
      <button onClick={() => setCount(count + 1)}>next</button>
    </>
  );
};

export default Home;
