import React from 'react'
import Item from '../Item'
import '../ItemList/style.css'

const ItemList = ({ productos, categoria }) => {

  const tituloCategoria = (categoria) => {
    if (categoria === "Camiseta") {
      return < h2 > Jersey</h2 >
    } else if (categoria === "Botin") {
      return < h2 > Shoes</h2 >
    } else if (categoria === "Pelota") {
      return < h2 > Ball</h2 >
    } else {
      return <h1 className='mainTitle' style={{ paddingtop: '80px' }}>ALL PRODUCTS</h1>
    }
  }

  return (
    <div className='itemListClass'>
      {tituloCategoria(categoria)}
      <div className="itemList">
        {productos.map(unProducto => {
          return <Item product={unProducto} key={unProducto.id} />
        })}
      </div>
    </div>
  )
}

export default ItemList