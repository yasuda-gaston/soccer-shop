import React, { createContext } from 'react'
import { useState } from "react";

export const Shop = createContext()

const ShopProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const addProduct = (product) => {
        const isInCart = isProductInCart(product.id)
        if (isInCart) {
            const productoRepetido = products.find(element => element.id === product.id)
            console.log(productoRepetido);
            productoRepetido.quantity += product.quantity
            setProducts([...products])
        } else {
            setProducts([...products, product])
        }
    }

    const removeProduct = (id) => {
        const productoRepetido = products.filter(ele => ele.id !== id)
        setProducts([...productoRepetido])
        console.log(products)
    }

    const countCart = () => {
        let cantidadTotal = 0;
        for (const product of products) {
            cantidadTotal += product.quantity
        }
        return cantidadTotal
    }

    const isProductInCart = (id) => {
        return products.some(product => product.id === id);
    }

    const cartVacio = (product) => {
        const vacio = product.some(products.quantity === 0)
        if (vacio) {
            <h1>esta vacio</h1>
        }
    }

    const total = () => {
        let total = 0;
        for (const product of products) {
            total += product.price * product.quantity
        }
        return total;
    }

    const clearCart = () => {
        setProducts([])
    }

    return (
        <Shop.Provider value={{ products, addProduct, countCart, removeProduct, cartVacio, total, clearCart }}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider
