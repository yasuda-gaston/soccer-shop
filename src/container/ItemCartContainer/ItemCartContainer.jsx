import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'
import TableRow from './TableRow'
import './style.scss'
import { Link } from 'react-router-dom'


const ItemCartContainer = () => {

    const { products } = useContext(Shop)

    return (
        <div className="tableContainer">
            {
                products.length === 0 ?
                    <div className='nadaCart'>
                        <h1 className='h1h1'>NO HAY NADA EN EL CARRO</h1>
                        <Link className='nadaCart__link' to='/'>volver home</Link>
                    </div>
                    :
                    <div >
                        <table className="table table-striped">
                            <tbody className='tableBody'>

                                {products.map(product => {
                                    return <TableRow key={product.id} product={product} />
                                })}

                            </tbody>
                        </table>
                    </div>

            }


        </div>

    )
}

export default ItemCartContainer
