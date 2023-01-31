import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemCartContainer from '../container/ItemCartContainer/ItemCartContainer';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ItemDetailContainer from '../container/ItemDetailContainer';
import ItemListContainer from '../container/ItemListContainer';
import './style.css'
import Slider from '../components/Slider/Slider';

const MainNavigator = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Slider />} />
                <Route path='*' element={<h2 className='notFound'>RNF (Route Not Found)</h2>} />
                <Route path='/home' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/detail/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<ItemCartContainer />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default MainNavigator