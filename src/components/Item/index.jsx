import React from 'react'
import Counter from '../Counter'
import '../Item/style.css'

const Item = ({ product }) => {
  return (
    <div className='card_container'>
      <div className="card" >
        <img src={product.image} className="card-img-top" alt={`id-${product.id}`} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.price}</p>
          <a href="/#" className="btn btn-primary">Go detail</a>
          <Counter />
        </div>
      </div>
    </div>

  )
}

export default Item