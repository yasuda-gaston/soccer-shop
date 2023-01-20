import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import logo from './logo.png';
import './style.css'

export default function NavBar() {

    return (
        <div className="navBar">

            <div className="Logo-container">
                <Link to='/'>
                    <img src={logo} className="Logo" alt="logo" />
                </Link>

            </div>

            <ul className='navBar__listContent'>

                <Link to="/category/Camiseta" className='navBar__Content'>Camisetas</Link>
                <Link to="/category/Botin" className='navBar__Content'>Botines</Link>
                <Link to="/category/Pelota" className='navBar__Content'>Pelotas</Link>
            </ul>
            <CartWidget />





        </div>
    )
}
