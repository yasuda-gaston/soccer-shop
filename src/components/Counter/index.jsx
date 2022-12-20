import React, { useState } from 'react'

const Counter = () => {

    const cantStock = 3;

    const [count, setCount] = useState(1)

    const sumaUno = () => {
        if (count >= cantStock) {
            alert('No posee stock suficiente')
        } else {
            setCount(count + 1)
        }
    }

    const restaUno = () => {
        if (count <= 1) {
            setCount(1)
        } else {
            setCount(count - 1)
        }
    }

    const reset = () => {
        setCount(1)
    }

    return (
        <div>
            <button onClick={sumaUno}>+</button>
            <button onClick={restaUno}>-</button>
            <button onClick={reset}>Reset</button>
            <span>{count}</span>
        </div>
    )
}

export default Counter