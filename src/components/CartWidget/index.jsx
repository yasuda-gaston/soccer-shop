import React from 'react'
import cart from './shopping_cart.svg'
import './style.css'

const CartWidget = () => {
    return (
        <div className='cart_content'>
            <a href="/#"><img src={cart} className="cart" alt="cart" /></a>
            <span className='counter'>6</span>
        </div>
    )
}

export default CartWidget