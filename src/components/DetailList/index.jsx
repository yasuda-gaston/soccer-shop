import React from 'react'
import Counter from '../Counter'
import './style.scss'

const ItemDetail = ({ productoDetalle }) => {
    console.log(productoDetalle)
    return (
        <div className='detalleMuestra'>
            <img src={productoDetalle.image} alt={productoDetalle.title} />
            <div className="detalleDato">
                <h5>{productoDetalle.title}</h5>
                <h4>$ {productoDetalle.price}</h4>
                <Counter />
            </div>

        </div>
    )
}

export default ItemDetail
