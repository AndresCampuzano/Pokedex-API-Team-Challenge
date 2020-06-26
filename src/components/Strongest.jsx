import React, { useState, useEffect } from 'react';
import Item from './Item.jsx';

const Strongest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://pokdex-master-devs.uc.r.appspot.com/api/curiosities/strongest?page=1&limit=12`
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

export default Strongest;
