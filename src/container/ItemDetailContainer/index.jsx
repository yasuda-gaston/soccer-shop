import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import productos from '../../data/products.json'
import ItemDetail from '../../components/DetailList';


const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})

    const { id } = useParams()

    useEffect(() => {

        // fetch(`https://fakestoreapi.com/products/${id}`)
        //     .then(response => {
        //         console.log(response);
        //         return response.json()
        //     })
        //     .then(json => {
        //         console.log(json)
        //         setDetail(json)
        //     })
        //     .catch((err) => {
        //         alert("Hubo un error")
        //     });

        const promesa = new Promise((acc, rej) => {
            setTimeout(() => {
                acc(productos)
            }, 1000)
        })
        promesa
            .then((result) => {
                setDetail(result)
            })
            .catch((erro) => {
                alert("errorrrr")
            })


    }, [id])

    return (
        <div >
            <ItemDetail productoDetalle={detail} />
        </div>
    )
}

export default ItemDetailContainer