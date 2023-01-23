import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/DetailList';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import './style.css'


const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([])

    const { id } = useParams()

    useEffect(() => {
        const getProduct = async () => {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                const productDetail = {
                    id: docSnap.id,
                    ...docSnap.data()
                }
                setDetail(productDetail)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }

        getProduct();




    }, [id])

    return (
        <div className='detailCard'>

            {
                Object.keys(detail).length === 0
                    ?
                    <h2 className='loading'>Loading... Loading...</h2>
                    :
                    <ItemDetail productoDetalle={detail} />
            }

        </div>
    )
}

export default ItemDetailContainer