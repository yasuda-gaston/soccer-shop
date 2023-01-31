import React from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = () => {

    const { categoryId } = useParams()

    const [products, loading, error] = useFirebase(categoryId)

    return (
        <>
            {error && <h1>Hey! you have an error!: {error}</h1>}
            {
                loading ?
                    <Spinner animation="border" variant="success" />
                    :
                    <ItemList productos={products} categoria={categoryId} />
            }
        </>
    )
}

export default ItemListContainer