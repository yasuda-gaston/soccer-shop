import React from 'react'
import Item from '../../component/Item'
import './style.scss'

const ItemListContainer = () => {
    return (
        <div className='item-list-container'>
            <Item title={"titulo1"} />
            <Item title={"titulo2"} />
            <Item title={"titulo3"} />
            <Item title={"titulo4"} />
        </div>
    )
}

export default ItemListContainer