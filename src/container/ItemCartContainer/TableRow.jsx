import React from 'react'
import CartCount from '../../components/CartCount'
import './styleTable.css'
import { Link } from 'react-router-dom';

const TableRow = ({ product }) => {
    return (

        <tr className='contenedorTable'>
            <td>
                <Link to={`/detail/${product.id}`}>
                    <img src={product.image} className='cartImage' alt="imagenProducto" />
                </Link>
            </td>
            <td className='productTitle'>{product.title}</td>
            <td>Price: $ {product.price}</td>
            <td>Qty: {product.quantity}</td>
            <td>
                <CartCount product={product} />
            </td>
        </tr>
    )
}

export default TableRow
