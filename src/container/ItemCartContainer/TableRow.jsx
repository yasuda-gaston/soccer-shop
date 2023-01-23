import React from 'react'
import CartCount from '../../components/CartCount'
import './styleTable.scss'

const TableRow = ({ product }) => {
    return (
        <tr className='contenedorTable'>
            <td><img src={product.image} className='cartImage' alt="imagenProducto" /></td>
            <td className='productTitle'>{product.title}</td>
            <td>$ {product.price}</td>
            {/* <td>{product.quantity}</td>
 */}

            <td><CartCount
                product={product}
            />
            </td>
            {/* modificar para que tenga el contador para la cart */}
        </tr>
    )
}

export default TableRow
