import React, { useState } from 'react'
import './style.css'
import swal from 'sweetalert';
import { Link } from 'react-router-dom'


const ItemCount = ({ onAdd, stock }) => {

    const [count, setCount] = useState(1)

    const sumaUno = () => {
        if (count < stock) {
            setCount(count + 1)
        } else {
            swal("Out of stock.");
        }
    }

    const restaUno = () => {
        if (count > 1) setCount(count - 1)
    }

    return (
        <div>
            {
                stock === 0 ?
                    <div>
                        <h3>Stock not available</h3>
                        <Link to='/'>Back to home</Link>
                    </div>
                    :
                    <div className="counterGroup">
                        <span className='cantidadCount'>Qty: {count}</span>
                        <div className="flechitas">
                            <button className='flechitasBoton' onClick={sumaUno}>⏶</button>
                            <button className='flechitasBoton' onClick={restaUno}>⏷</button>
                        </div>
                        <button className='confirmationButton' onClick={() => { onAdd(count) }}>Add to cart</button>
                    </div>
            }
        </div >
    )
}

export default ItemCount