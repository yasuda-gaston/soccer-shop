import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'
import TableRow from './TableRow'

const ItemCartContainer = () => {

    const { products } = useContext(Shop)
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">TITLE</th>
                    <th scope="col">IMAGE</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">QUANTITY</th>
                    <th scope="col">REMOVE</th>
                </tr>
            </thead>
            <tbody>

                {products.map(product => {
                    return <TableRow key={product.id} product={product} />
                })}

            </tbody>
        </table>
    )
}

export default ItemCartContainer
