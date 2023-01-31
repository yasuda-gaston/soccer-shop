import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';

const CartCount = ({ product }) => {

    const { removeProduct } = useContext(Shop)

    const remove = () => {
        console.log(product.id);
        removeProduct(product.id)
        removeProduct(product.id)
    }

    return (
        <div>
            <div className="confirmation">
                <button className='confirmationButton' onClick={remove} >Remove product</button>
            </div>
        </div>
    )
}

export default CartCount
