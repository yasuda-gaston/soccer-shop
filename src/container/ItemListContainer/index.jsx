import React from 'react';
import ItemList from '../../components/ItemList';
import '../ItemListContainer/style.css'
import { useParams } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';



const ItemListContainer = () => {

    const { categoryId } = useParams()

    const [products, loading, error] = useFirebase(categoryId)




    return (
        <>
            {error && <h1>oh! hubo un error: {error}</h1>}

            {
                loading ?
                    <h1>cargando...</h1>
                    :
                    <ItemList productos={products} />
            }
            )

        </>

    )

}

export default ItemListContainer