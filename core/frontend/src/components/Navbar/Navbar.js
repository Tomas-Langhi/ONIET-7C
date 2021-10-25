import React from 'react'

import { NavbarStyle, NavButton } from './styles/Navbar'

import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <NavbarStyle>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">ONIET</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-0 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' style={{ textDecoration: 'none' }}>
                                    <span className="nav-link active" aria-current="page">Inicio</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/barrios' style={{ textDecoration: 'none' }}>
                                    <span className="nav-link">Barrios</span>
                                </Link>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            <Link to='/login'>
                                <NavButton>
                                    Iniciar Sesion
                                </NavButton>
                            </Link>
                        </span>
                    </div>
                </div>
            </NavbarStyle>

        </>
    )
}

export default Navbar
