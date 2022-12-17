import React from 'react'

const Item = ({ title }) => {
    return (
        <div class="card" style={{ width: '18rem' }}>
            <img src="https://cdn.shopify.com/s/files/1/0573/3141/7131/products/4c85b9f3f009418b8759aeca002e4aaf_9366.jpg?v=1665355122" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Item 