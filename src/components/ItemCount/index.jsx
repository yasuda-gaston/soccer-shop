import React, { useState } from 'react'
import './style.css'

const ItemCount = ({ onAdd, stock }) => {


    const [count, setCount] = useState(1)

    const sumaUno = () => {
        if (count < stock) {
            setCount(count + 1)
        } else {
            alert('no tiene stock disponible')
        }
    }

    const restaUno = () => {
        if (count > 1) setCount(count - 1)
    }

    return (
        <div>

            <div className="counterGroup">
                <span className='cantidadCount'>Cantidad {count}</span>

                <div className="flechitas">
                    <button className='flechitasBoton' onClick={sumaUno}>⏶</button>
                    <button className='flechitasBoton' onClick={restaUno}>⏷</button>
                </div>
            </div>


            <div className="confirmation">
                <button className='confirmationButton' onClick={() => onAdd(count)}>enviar carrito</button>

                {/* aca tengo q crear otro boton que me diga eliminar */}
            </div>

        </div >
    )
}

export default ItemCount