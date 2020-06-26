import React from 'react';

import circle from '../assets/images/floating.svg';

const FloatingCircle = () => {
  // const handleTrigger = () => {
  //   props.value = !props.value;
  // };
  return (
    <div className='floating ShowOnMobile pulse'>
      <button
        type='button'
        aria-label='menu'
        style={{
          background: `url(${circle})`,
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat'
        }}
        // onClick={handleTrigger}
      ></button>
    </div>
  );
};

export default FloatingCircle;
