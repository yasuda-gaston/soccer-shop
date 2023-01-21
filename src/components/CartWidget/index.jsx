import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Shop } from '../../context/ShopProvider'
import logoCart from '../CartWidget/cart.svg'
import './style.css'

const CartWidget = () => {
    //Consumir el context para que me figure la cantidad de productos que tenemos en nuestro changuito

    const { countCart } = useContext(Shop)


    return (
        <div className='countCartContent'>
            <Link to='/cart'>
                <img src={logoCart} className="cartImg" alt="cartIcon" />
            </Link>
            <span className='cartCounter'>{countCart()}</span>
        </div>
    )
}

export default CartWidget