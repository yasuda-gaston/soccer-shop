import React from 'react'
import CartWidget from '../CartWidget';
import logo from './logo.png';

import './style.css'

const NavBar = () => {

    return (
        <div className="navBar">

            <div className="Logo-container">
                <a href="/#"><img src={logo} className="Logo" alt="logo" /></a>
            </div>

            <ul className='navBar__listContent'>
                <a href="/#"><li className='navBar__list'>Botines</li></a>
                <a href="/#"><li className='navBar__list'>Pelotas</li></a>
                <a href="/#"><li className='navBar__list'>Camistas</li></a>
                <CartWidget />
            </ul>



        </div>
    )
}

export default NavBar