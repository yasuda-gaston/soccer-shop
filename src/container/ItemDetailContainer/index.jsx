import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import productos from '../../data/products.json'
import ItemDetail from '../../components/DetailList';


const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([])

    const { id } = useParams()

    useEffect(() => {

        const promesa = new Promise((acc, rej) => {
            setTimeout(() => {
                acc(productos)
            }, 3000)
        })

        promesa
            .then((product) => {
                if (id) {
                    const productoId = product.find(unProducto => unProducto.id.toString() === id)
                    console.log(productoId)
                    setDetail(productoId)
                }
            })
            .catch((erro) => {
                alert('HUBO UN ERROR')
            })

    }, [id])

    return (
        <div >

            {
                Object.keys(detail).length === 0
                    ?
                    <h2>Loading... Loading...</h2>
                    :
                    <ItemDetail productoDetalle={detail} />
            }

        </div>
    )
}

export default ItemDetailContainer