import {CartIcon, } from '../icons';
import { useSelector } from 'react-redux';

import React from 'react'

const Navbar = () => {
  const{ amount, cartItems }  = useSelector((store) => store.cart);
  const amountInCart = cartItems.length;
  return (
    <nav>
      <div className="nav-center">
        <h3>Phone Store</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amountInCart}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;