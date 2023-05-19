import React from 'react';

const Coin = ({ number }) => {
  return (
    <div className='coin'>
      <p>${number}</p>
    </div>
  );
};

export default Coin;
