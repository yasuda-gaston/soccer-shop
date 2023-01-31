import React from 'react'
import { Link } from 'react-router-dom'
import '../Item/style.css'

const Item = ({ product }) => {

  return (

    <div className='card__container'>
      <div className="card__card" >
        <div className="card__card__image">
          <Link to={`/detail/${product.id}`} >
            <img src={product.image} className="card__image" alt={`id-${product.id}`} />
            <p className='clickDetail'>Detail</p>
          </Link>

        </div>
        <div className="card__body">
          <h5 className="card__title">{product.title}</h5>
          <p className="card__text">${product.price}</p>

        </div>
      </div>
    </div >
  )
}

export default Item