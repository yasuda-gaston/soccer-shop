import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Shop } from "../../context/ShopProvider";
import ItemCount from '../ItemCount'
import './style.css'

const ItemDetail = ({ productoDetalle }) => {

    const [quantity, setQuantity] = useState(0)

    const { addProduct } = useContext(Shop)

    const onAdd = (cantidad) => {
        console.log(`se agrego ${cantidad} de productos`)

        setQuantity(cantidad)
        addProduct({ ...productoDetalle, quantity: cantidad })
    }

    return (
        <div className="contenedorDetalleMuestra">

            <div className='detalleMuestra'>
                <div className="imagenDetail">
                    <img src={productoDetalle.image} className="productoDetalleImagen" alt={productoDetalle.title} />
                </div>
                <div className="detalleDato">
                    <h5 >{productoDetalle.title}</h5>
                    <h4>$ {productoDetalle.price}</h4>
                    {
                        quantity === 0 ?
                            <ItemCount
                                stock={productoDetalle.stock}
                                onAdd={onAdd}
                            />
                            :
                            <div className='continue'>
                                <Link to='/home' className='gogoShop'>Continue Shopping</Link>
                                <Link to='/cart' className='gogo'>Go to cart</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}


export default ItemDetail
