import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'
import TableRow from './TableRow'
import './style.scss'


const ItemCartContainer = () => {

    const { products } = useContext(Shop)

    return (
        <div className="tableContainer">
            <table className="table table-striped">
                <tbody className='tableBody'>

                    {products.map(product => {
                        return <TableRow key={product.id} product={product} />
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default ItemCartContainer
