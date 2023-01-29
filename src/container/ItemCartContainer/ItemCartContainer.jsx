import React from 'react'
import { useContext, useState } from 'react'
import { Shop } from '../../context/ShopProvider'
import TableRow from './TableRow'
import './style.scss'
import { Link } from 'react-router-dom'
import GenerateOrderObject from '../../services/GenerateOrderObject'
import { db } from '../../firebase/config';
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import FormComp from '../../components/Form/FormComp'
import Spinner from 'react-bootstrap/Spinner';
import swal from 'sweetalert';






const ItemCartContainer = () => {

    const { products, total, clearCart } = useContext(Shop)

    const [loader, setLoader] = useState(false)

    const [formVisi, setFormVisi] = useState(false)


    const corfirmPurchase = async (data) => {

        const { nombre, email, phone: telefono } = data
        try {
            setLoader(true)
            const order = GenerateOrderObject({
                nombre,
                email,
                telefono,
                cart: products,
                total: total()
            })
            console.log(order);
            setFormVisi(true)



            const docRef = await addDoc(collection(db, "orders"), order);
            clearCart();


            for (const productCart of products) {
                const productRef = doc(db, "products", productCart.id);


                await updateDoc(productRef, {
                    stock: productCart.stock - productCart.quantity
                });
            }
            swal("Gracias por su compra", "su ID de compra es: " + docRef.id, "success");


        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false)
            setFormVisi(false)
        }


    }




    return (
        <div className="tableContainer">
            {
                products.length === 0 ?
                    <div className='nadaCart'>
                        <h1 className='h1h1'>NO HAY NADA EN EL CARRO</h1>
                        <Link className='nadaCart__link' to='/'>volver home</Link>
                    </div>
                    :
                    <div >

                        <table className="table table-striped">
                            <tbody className='tableBody'>

                                {products.map(product => {
                                    return <TableRow key={product.id} product={product} />
                                })}

                            </tbody>
                        </table>

                        <h1>Total a pagar $ {total()}</h1>

                        {
                            loader ?

                                <Spinner animation="border" variant="success" />
                                :
                                <button onClick={() => { setFormVisi(true) }}>CONFIRMAR</button>
                        }
                        {/* cerca de confirmar tiene que decir el total de todos los gastos */}
                        {
                            formVisi ?
                                <FormComp
                                    corfirmPurchase={corfirmPurchase}
                                    formVisi={formVisi}
                                    setFormVisi={setFormVisi}
                                />
                                : null
                        }

                    </div>

            }


        </div>

    )
}

export default ItemCartContainer
