import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import { useNavigate } from 'react-router-dom'
import "./Cart.css"
const Cart = () => {

  const { food_list,
    cartItems, removeFromCart,getCartItemsTotal } = useContext(StoreContext)
    const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-titles">

          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {

            return (
              <div>

                <div className='cart-items-titles cart-items-in-cart'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${cartItems[item._id] * item.price}</p>
                  <p className='cross ' onClick={() => { removeFromCart(item._id) }}>X</p>
                </div>
                <hr />

              </div>
            )
          }
        })}
      </div>
      <div className="cart-checkout">
        <div className="cart-bottom">
          <h1>Checkout</h1>
          <div className="cart-checkout-main">
            <div className="cart-item-details">
              <p>Subtotal</p>
              <p>${getCartItemsTotal()}</p>
              
            </div>
            <hr />
            <div className="cart-item-details">
              <p>Delivery Fee</p>
              <p>2</p>
              
            </div>
            <hr />
            <div className="cart-item-details">
              <b>Total</b>
              <b>${getCartItemsTotal()+2}</b>
              {/* <hr /> */}
            </div>
          </div>

          <button onClick={()=>{navigate("/order")}}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode enter here </p>
            <div className="promocode-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
