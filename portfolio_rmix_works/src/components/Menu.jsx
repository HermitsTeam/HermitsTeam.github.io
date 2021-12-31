import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'


const Menu = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className='nav navbar-nav me-auto'>
                    <li className='nav-item'>
                        
                        <Link className='nav-link' to="/">Inicio</Link>
                    </li>

                    <li className='nav-item'>
                        
                        <Link className='nav-link' to="/contact">Contacto</Link>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Menu