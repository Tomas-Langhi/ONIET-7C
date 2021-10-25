import React from 'react'

import { NavbarStyle, NavButton } from './styles/Navbar'

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
                                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Barrios</a>
                            </li>
                            <li className="nav-item">
                            </li>
                        </ul>
                        <span class="navbar-text">
                            <NavButton>
                            Iniciar Sesion
                            </NavButton>
                        </span>
                    </div>
                </div>
            </NavbarStyle>

        </>
    )
}

export default Navbar
