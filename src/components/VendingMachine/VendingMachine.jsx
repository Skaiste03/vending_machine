import './vendingMachine.css';
import Product from '../Product';
import Coin from '../Coin';
import products from '../../constants/products';
import { useState } from 'react';

const VendingMachine = () => {
  const [money, setMoney] = useState(0);
  const [price, setPrice] = useState(null);
  const [change, setChange] = useState(null);
  const [message, setMessage] = useState('');

  const coins = [2, 1, 0.5, 0.2, 0.1];

  // Takes Order
  const takeOrder = () => {
    if (price < money) {
      const coinsChange = money - price;

      let sum = 0;
      const coinsArr = [];

      for (let i = 0; i < coins.length; i++) {
        while (sum + coins[i] <= coinsChange) {
          sum += coins[i];
          coinsArr.push(coins[i]);
        }
      }
      setChange(coinsArr);
      setMessage('Order is completed');
      setPrice(null);
      setMoney(0);
    } else if (price === money) {
      setMessage('Your order is completed');
      setMoney(0);
    } else {
      setMessage('Not enough money');
    }
  };

  const addMoney = (coin) => {
    const updatedMoney = (coin + money).toFixed(1);
    setMoney(parseFloat(updatedMoney));
    if (message.length > 0) {
      setMessage('');
    }
  };

  return (
    <div className='vending-machine'>
      <div className='container'>
        <div className='products'>
          {products.map((product) => (
            <Product
              price={product.price}
              name={product.name}
              id={product.id}
              key={product.id}
            />
          ))}
        </div>
        <div className='side'>
          <div className='screen'>
            <div className='message'>
              <p>{message}</p>
            </div>
            <p>
              Your wallet: <span>{money}€</span>{' '}
            </p>
            <p>
              Order price: <span>{price}€</span>
            </p>
          </div>
          <div className='products-btns'>
            {products.map((product) => (
              <button
                className='product-btn'
                onClick={() => {
                  setPrice(product.price);
                  if (message.length > 0) {
                    setMessage('');
                  }
                }}
                key={product.id}
              >
                {product.id}
              </button>
            ))}
          </div>
          <button className='order-btn' onClick={() => takeOrder()}>
            Order
          </button>
          <button
            className='reset-btn'
            onClick={() => {
              setMoney(0);
              setPrice(null);
              setChange(null);
              setMessage('');
            }}
          >
            Reset
          </button>
          <div className='coins'>
            {coins.map((coin) => (
              <div onClick={() => addMoney(coin)} key={coin}>
                <Coin number={coin} />
              </div>
            ))}
          </div>
          <div className='change-box'>
            <p>Your change:</p>

            {change && (
              <>
                {' '}
                <div className='change-coins'>
                  {change.map((coin, index) => (
                    <Coin number={coin} key={coin + index} />
                  ))}
                </div>
                <button className='collect-btn' onClick={() => setChange(null)}>
                  Collect coins
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendingMachine;
