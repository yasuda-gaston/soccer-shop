import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList';
import '../ItemListContainer/style.css'
import productos from '../../data/products.json'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

    const [product, setProduct] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        const promesa = new Promise((acc, rej) => {
            setTimeout(() => {
                acc(productos)
            }, 1000)
        })

        promesa
            .then((product) => {
                if (categoryId) {
                    const productoCategoria = product.filter(unProducto => unProducto.category === categoryId)
                    console.log(productoCategoria)
                    setProduct(productoCategoria)
                } else {
                    setProduct(product)
                }
            })
            .catch((erro) => {
                alert('HUBO UN ERROR')
            })

    }, [categoryId])

    return (
        <div className='loco'>
            <h1>{greeting}</h1>
            <div className='displayFFlexxx'>
                <ItemList productos={product} />
            </div>
        </div>
    )
}

export default ItemListContainer