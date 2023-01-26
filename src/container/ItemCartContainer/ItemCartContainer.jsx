import React from 'react'
import { useContext, useState } from 'react'
import { Shop } from '../../context/ShopProvider'
import TableRow from './TableRow'
import './style.scss'
import { Link } from 'react-router-dom'
import GenerateOrderObject from '../../services/GenerateOrderObject'
import { db } from '../../firebase/config';
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";





const ItemCartContainer = () => {

    const { products, total, clearCart } = useContext(Shop)

    const [formVisi, setFormVisi] = useState(false)


    const corfirmPurchase = async () => {

        const order = GenerateOrderObject({
            nombre: "ryo",
            email: "ryo@gmail",
            tel: "121212",
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

        alert("orden onfirmada con ID:" + docRef.id)

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
                        <button onClick={corfirmPurchase}>CONFIRMAR</button>
                        {
                            formVisi ?
                                <form>
                                    <input type="text" />
                                </form>
                                :
                                null
                        }

                    </div>

            }


        </div>

    )
}

export default ItemCartContainer
