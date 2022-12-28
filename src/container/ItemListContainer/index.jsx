import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList';
import productos from '../../data/products.json';
import '../ItemListContainer/style.css'

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const promesa = new Promise((acc, rec) => {
            setTimeout(() => {
                acc(productos);
            }, 3000);
        });

        promesa
            .then((result) => {
                setProducts(result);
            })
            .catch((err) => {
                alert("ERROR")
            });

    }, [])

    return (
        <div className='loco'>
            <h1>{greeting}</h1>
            <div className='displayFFlexxx'>
                <ItemList productos={products} />
            </div>
        </div>
    )
}

export default ItemListContainer