import { createContext } from "react";

import React from 'react'
import { useState } from "react";

export const Shop = createContext()

const ShopProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const addProduct = (product) => {
        const isInCart = isProductInCart(product.id)
        if (isInCart) {
            const productoRepetido = products.find(element => element.id === products.id)
            productoRepetido.quantity += products.quantity
            setProducts([...products])
        } else {
            setProducts([...products, product])
        }
    }

    const countCart = () => {
        let cantidadTotal = 0;
        for (const product of products) {
            cantidadTotal += product.quantity
        }
        return cantidadTotal
    }

    const isProductInCart = (id) => {
        return products.some(product => product.id === id)
    }

    return (
        <Shop.Provider value={{ products, addProduct, countCart }}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider
