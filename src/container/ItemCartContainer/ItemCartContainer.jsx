import React from 'react'
import { useContext, useState } from 'react'
import { Shop } from '../../context/ShopProvider'
import TableRow from './TableRow'
import './style.css'
import { Link } from 'react-router-dom'
import GenerateOrderObject from '../../services/GenerateOrderObject'
import { db } from '../../firebase/config';
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import FormComp from '../../components/Form/FormComp'
import Spinner from 'react-bootstrap/Spinner';
import swal from 'sweetalert';

const ItemCartContainer = () => {

    const { products, total, clearCart, countCart } = useContext(Shop)
    const [loader, setLoader] = useState(false)
    const [formVisi, setFormVisi] = useState(false)

    const corfirmPurchase = async (data) => {

        const { nombre, apellido, elEmail, phone } = data
        try {
            setLoader(true)
            const order = GenerateOrderObject({
                nombre,
                apellido,
                elEmail,
                phone,
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
            swal("Thank you, your order has been placed", "Your order number is: " + docRef.id, "success");

        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false)
            setFormVisi(false)
        }
    }

    const plural = () => {

        if (countCart() <= '1') {
            return 'item'
        } else {
            return 'items'
        }
    }


    return (
        <div className="tableContainer">
            {
                products.length !== 0 ?
                    <div >
                        <table className="table-borderless">
                            <tbody className='tableBody'>

                                {products.map(product => {
                                    return <TableRow key={product.id} product={product} />
                                })}

                            </tbody>
                        </table>
                        <div className="checkOutContent">
                            <div className="checkOutContentChild">

                                <h5 className='checkOutContent__h3'>Subtotal ({countCart()} {plural()}): $ {total()}</h5>

                                {
                                    loader ?

                                        <Spinner animation="border" variant="success" />
                                        :
                                        <button className='checkOutContent__go' onClick={() => { setFormVisi(true) }}>Proceed to check-out</button>
                                }
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
                        </div>
                    </div>
                    :
                    <div className='nadaCart'>
                        <h1 className='h1h1'>No item in cart</h1>
                        <Link className='nadaCart__link' to='/'>Back to home</Link>
                    </div >
            }
        </div >
    )
}

export default ItemCartContainer
