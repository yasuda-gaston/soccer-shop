import React from 'react'

const ItemDetail = ({ productoSolo }) => {
    return (
        <div>
            <h3>{productoSolo.id}</h3>
            <h3>{productoSolo.name}</h3>
            <img src={productoSolo.image} alt="imagenR&M" />
        </div>
    )
}

export default ItemDetail
