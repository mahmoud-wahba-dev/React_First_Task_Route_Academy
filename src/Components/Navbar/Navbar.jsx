import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
            <nav className="navbar main_navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand text-white" to="/">START REACT</Link>
                    <button className="navbar-toggler p-2 py-3 border-0  bg_green" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='text-white fw-bold px-2'>MENU</span>
                        <i class="fas fa-bars text-white"></i> 
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item w_fit_content">
                                <NavLink className="nav-link " aria-current="page" to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li className="nav-item w_fit_content">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item w_fit_content">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
