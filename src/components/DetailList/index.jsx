import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Shop } from "../../context/ShopProvider";
import ItemCount from '../ItemCount'
import './style.scss'

const ItemDetail = ({ productoDetalle }) => {

    const [quantity, setQuantity] = useState(0)

    const { addProduct } = useContext(Shop)


    const onAdd = (cantidad) => {
        console.log(`se agrego ${cantidad} de productos`)
        setQuantity(cantidad)
        addProduct({ ...productoDetalle, quantity: cantidad })
    }


    return (
        <div className='detalleMuestra'>
            <img src={productoDetalle.image} alt={productoDetalle.title} />
            <div className="detalleDato">
                <h5>{productoDetalle.title}</h5>
                <h4>$ {productoDetalle.price}</h4>

                {
                    quantity === 0 ?
                        <ItemCount
                            stock={productoDetalle.stock}
                            onAdd={onAdd}
                        />
                        :
                        //CUANDO SE CLIKEA ACA QUIERO QUE ME MUESTRE POR CONSOLA LO QUE TENGO EN CARRITO
                        <button>
                            <Link to='/cart' >IR CARRITO</Link>
                        </button>
                }

            </div>

        </div>
    )

}

export default ItemDetail
