import React from 'react'
import './style.css';

const ItemListContainer = ({ greeting }) => {
    const messi = 'https://www.lavoz.com.ar/resizer/HGmf3eg8GJao9VzdK4jdxa5yNZ4=/980x640/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/DYYSZ2IZCRCHHLH6RDSEXCS4EI.jpg'
    return (
        <div className='hero'>
            <h1>{greeting}</h1>
            <img src={messi} className='messiCampeon' alt="messi" />
        </div>
    )
}


export default ItemListContainer