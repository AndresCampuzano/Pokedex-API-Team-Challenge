import React from 'react';

import circle from '../assets/images/floating.svg';

const FloatingCircle = () => {
  return (
    <div className='floating ShowOnMobile'>
      <button
        style={{
          background: `url(${circle})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></button>
    </div>
  );
};

export default FloatingCircle;
