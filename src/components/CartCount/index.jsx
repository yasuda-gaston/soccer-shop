import React, { useState } from 'react'
import { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';

const CartCount = ({ product }) => {

    const [cartCount, setCartCount] = useState(product.quantity)


    const { removeProduct } = useContext(Shop)

    const sumaUno = () => {

        if (cartCount < product.stock) {
            setCartCount(cartCount + 1)
        } else {
            alert('NO HAY STOCK')
        }

    }

    const restaUno = () => {
        if (cartCount > 1) setCartCount(cartCount - 1)
    }

    const remove = () => {
        console.log(product.id);
        removeProduct(product.id)
        removeProduct(product.id)
    }



    return (
        <div>
            <div className="counterGroup">
                <span className='cantidadCount'>Cantidad {cartCount}</span>

                <div className="flechitas">
                    <button className='flechitasBoton' onClick={sumaUno}>⏶</button>
                    <button className='flechitasBoton' onClick={restaUno}>⏷</button>
                </div>
            </div>


            <div className="confirmation">
                <button className='confirmationButton' onClick={remove} >eliminar producto</button>

                {/* aca tengo q crear otro boton que me diga eliminar */}
            </div>
        </div>
    )
}

export default CartCount
