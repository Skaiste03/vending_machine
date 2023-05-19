import React from 'react';

const Product = ({ name, price, id }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>id: {id}</p>
      <p>{price}€</p>
    </div>
  );
};

export default Product;
