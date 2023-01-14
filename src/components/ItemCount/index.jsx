import React, { useState } from 'react'

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

    const reset = () => {
        setCount(1)
    }

    return (
        <div>
            <button onClick={sumaUno}>+</button>
            <span>{count}</span>
            <button onClick={restaUno}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={() => onAdd(count)}>CONFIRMAR</button>
        </div >
    )
}

export default ItemCount