import React, { useState, useEffect } from 'react';
import Item from './Item.jsx';

const Weakest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://pokdex-master-devs.uc.r.appspot.com/api/curiosities/weakest?page=1&limit=12`
    )
      .then(response => response.json())
      .then(response =>
        setData({
          error: response.error,
          status: response.status,
          body: response.body.pokemon
        })
      )
      .catch(e => console.log(e));
  }, []);

  return (
    <>
      {data.body
        ? data.body.map((items, i) => {
            return <Item key={i} {...items} />;
          })
        : 'Loading...'}
    </>
  );
};

export default Weakest;
