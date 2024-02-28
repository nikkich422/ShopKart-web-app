import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import './NavBar.css';
import { useSelector } from 'react-redux';

function NavBar() {

  const cart = useSelector(state => state.CartReducer.cart);

  let count = 0;
  cart.forEach((item) => (count += item.quantity));

  return (
    <nav>
        <h2 className='banner'>ShopKart</h2>
        <div className='right-layout'>
            <div className='cart-layout'>
                <FaCartPlus />
                <h3>{count}</h3>
            </div>
        </div>
    </nav>
  )
}

export default NavBar