import React from 'react'
import './SingleProduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../../redux/slices/CartSlice';

function SingleProduct({product}) {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.CartReducer.cart);
  const curItem = cart.find(item => item.id == product.id);
  const currQuantity = curItem ? curItem.quantity : 0;

  return (
    <div className='singleProduct'>
      <img className='productImg' src={product.images[0]} alt={product.title} />
      <div className="productInfo">
        <h2 className='productTitle'>{product.title}</h2>
        <p className='productPrice'>${product.price}.00</p>
      </div>
      <div className="cartInfo">
        <button className='button' onClick={() => dispatch(removeFromCart(product.id))}>-</button>
        <h4>{currQuantity}</h4>
        <button className='button' onClick={() => dispatch(addToCart(product.id))}>+</button>
      </div>
    </div>
  )
}

export default SingleProduct