import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Shop } from '../../context/ShopProvider'
import logoCart from '../CartWidget/cart.svg'

const CartWidget = () => {
    //Consumir el context para que me figure la cantidad de productos que tenemos en nuestro changuito

    const { countCart } = useContext(Shop)


    return (
        <>
            <Link to='/cart'>
                <img src={logoCart} className="cartImg" alt="cartIcon" />
            </Link>
            <span>{countCart()}</span>
        </>
    )
}

export default CartWidget