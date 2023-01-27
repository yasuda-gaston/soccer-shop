import React from 'react';
import ItemList from '../../components/ItemList';
import '../ItemListContainer/style.css'
import { useParams } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import Spinner from 'react-bootstrap/Spinner';




const ItemListContainer = () => {

    const { categoryId } = useParams()

    const [products, loading, error] = useFirebase(categoryId)




    return (
        <>
            {error && <h1>oh! hubo un error: {error}</h1>}

            {
                loading ?
                    <Spinner animation="grow" variant="success" />
                    :
                    <ItemList productos={products} />
            }
            )

        </>

    )

}

export default ItemListContainer