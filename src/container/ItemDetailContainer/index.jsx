import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/DetailList';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([])

    useEffect(() => {

        fetch('https://rickandmortyapi.com/api/character/183')

            .then((response) => {
                console.log(response);
                return response.json()
            })
            .then((JSON) => {
                console.log(JSON);
                setDetail(JSON)
            })
            .catch((error) => {
                alert('HUBO UN ERROR')
            })
    }, [])

    return (
        <div >
            <ItemDetail productoSolo={detail} />
        </div>
    )
}

export default ItemDetailContainer