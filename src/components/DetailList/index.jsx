import React from 'react'

const ItemDetail = ({ productoDetalle }) => {
    console.log(productoDetalle)
    return (
        <div>
            <img src={productoDetalle.image} alt={productoDetalle.title} />
            <h3>{productoDetalle.title}</h3>
            <p>$ {productoDetalle.price}</p>

        </div>
    )
}

export default ItemDetail
