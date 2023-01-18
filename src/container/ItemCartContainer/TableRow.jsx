import React from 'react'

const TableRow = ({ product }) => {
    return (
        <tr>
            <th scope="row">{product.id}</th>
            <td><img src={product.image} alt="imagenProducto" /></td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td><button>REMOVE</button></td>
        </tr>
    )
}

export default TableRow
