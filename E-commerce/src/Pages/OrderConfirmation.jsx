import React, { useContext } from 'react';
import { ShopContext } from '../ShopContext';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  const { all_product, cartItem, getTotalCartAmount } = useContext(ShopContext);
  const randomInt = Math.floor(Math.random() * 100);

  return (
    <div className="order-confirmation">
      <h1>Thank you for your order!</h1>
      <p>Your order has been placed successfully. Here is your order summary:</p>
      <h4>Order Number: {randomInt} </h4>
      <div className="product-summary">
        {all_product.map((product) => {
          if (cartItem[product.id] > 0) {
            return (
              <div key={product.id} className="summary-item">
                <img src={product.image} alt={product.name} className="summary-image" />
                <p>{product.name}</p>
                <p>Quantity: {cartItem[product.id]}</p>
                <p>Price: Rs.{product.price}</p>
                <p>Total: Rs.{(product.price * cartItem[product.id]).toFixed(2)}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="summary-total">
        <h2>Total Amount: Rs.{getTotalCartAmount()}</h2>
      </div>
      <Link to="/">
        <button className="home-button">Go to Homepage</button>
      </Link>
    </div>
  );
};

export default OrderConfirmation;