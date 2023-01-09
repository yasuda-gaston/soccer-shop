import React from 'react'
import Detail from '../Detail'

const ItemDetail = ({ productoDetalle }) => {
    console.log(productoDetalle)
    return (
        <div>
            {productoDetalle.map(unProducto => {
                return (
                    <Detail productoDetalle={unProducto} key={unProducto.id} />
                )
            }
            )
            }

        </div>
    )
}

export default ItemDetail
