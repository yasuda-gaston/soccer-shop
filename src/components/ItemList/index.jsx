import React from 'react'
import Item from '../Item'
import '../ItemList/style.css'

const ItemList = ({ productos }) => {
  return (
    <div className='displayFlex'>
      {productos.map(unProducto => {
        return <Item product={unProducto} key={unProducto.id} />
      })}
    </div>
  )
}

export default ItemList