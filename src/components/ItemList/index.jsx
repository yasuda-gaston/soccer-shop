import React from 'react'
import Item from '../Item'
import '../ItemList/style.css'

const ItemList = ({ productos }) => {
  return (
    <div className='displayFlex'>
      {productos.map(producto => {
        return <Item product={producto} key={producto.id} />
      })}
    </div>
  )
}

export default ItemList