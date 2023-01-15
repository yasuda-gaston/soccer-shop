import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList';
import '../ItemListContainer/style.css'
import productos from '../../data/products.json'
import { useParams } from 'react-router-dom';
// import Ad from '../../components/Ad';


const ItemListContainer = ({ greeting }) => {

    const [product, setProduct] = useState([])

    // const [adVisibility, setAdVisibility] = useState(true)

    const { categoryId } = useParams()

    // useEffect(() => {

    //     const handleEsc = (event) => {
    //         console.log(event); //Evento nativo del browser

    //         if (event.keyCode === 27) {
    //             console.log("will close");
    //             setAdVisibility(false)
    //             window.removeEventListener("keydown", handleEsc);
    //         }
    //     };

    //     window.addEventListener("keydown", handleEsc);

    //     return () => {
    //         window.removeEventListener("keydown", handleEsc);
    //     };

    // }, []);

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

    // const handleCloseAd = (event) => {

    //     console.log(event);

    //     setAdVisibility(false)
    // }

    return (
        <div>
            {/* {
                adVisibility === true
                    ?
                    <Ad>
                        <h3>Queres vender tus alhajas? Ofrecemos a nuestros clientes la máxima seguridad y el mejor precio del mercado</h3>
                        <button
                            style={{
                                width: 100,
                                padding: 8,
                                border: '2px solid black'
                            }}
                            onClick={handleCloseAd}
                        >Cerrar</button>
                    </Ad>
                    :
                    null
            } */}
            <ItemList productos={product} />
        </div>
    )
}

export default ItemListContainer