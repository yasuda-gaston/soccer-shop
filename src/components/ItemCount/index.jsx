import React, { useState } from 'react'
import './style.css'
import swal from 'sweetalert';

const ItemCount = ({ onAdd, stock }) => {



    const [count, setCount] = useState(1)

    const sumaUno = () => {
        if (count < stock) {
            setCount(count + 1)
        } else {
            swal("no hay stock disponible, intente mas adelante.");
        }
    }

    const restaUno = () => {
        if (count > 1) setCount(count - 1)
    }

    const hayStock = () => {
        if (stock === 0) {
            swal("no hay stock disponible, intente mas adelante.");
        } else {
            onAdd(count)
        }
    }



    return (
        <div>
            <div className="counterGroup">

                {
                    stock === 0 ?
                        <span className='cantidadCount'>NO HAY STOCK!</span> :
                        <span className='cantidadCount'>Cantidad {count}</span>
                }

                <div className="flechitas">
                    <button className='flechitasBoton' onClick={sumaUno}>⏶</button>
                    <button className='flechitasBoton' onClick={restaUno}>⏷</button>
                </div>
            </div>


            <div className="confirmation">

                <button className='confirmationButton' onClick={hayStock}>enviar carrito</button>
            </div>

        </div >
    )
}

export default ItemCount