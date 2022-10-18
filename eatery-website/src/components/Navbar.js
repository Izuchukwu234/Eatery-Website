import React from 'react'
import logo from '../Images/logo.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
                <div className="container">
                    <a href="#" className="navbar-brand">
                        <img src={logo} alt="logo" width="60" />
                        <span className='logo'>Awka Eatery</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarul">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarul">
                        <ul className="navbar-nav ms-auto mb-2 mg-lg-0">
                            <div className="nav-item mx-2">
                                <a href="#home" className="nav-link active">
                                    <i className="bi bi-house-fill mx-1"></i>
                                    Home
                                </a>
                            </div>

                            <div className="nav-item mx-2">
                                <a href="#about" className="nav-link active">
                                    <i className="bi bi-people-fill mx-1"></i>
                                    About
                                </a>
                            </div>

                            <div className="nav-item mx-2">
                                <a href="#service" className="nav-link active">
                                    <i className="bi bi-gear-fill mx-1"></i>
                                    Service
                                </a>
                            </div>

                            <div className="nav-item mx-2">
                                <a href="#contact" className="nav-link active">
                                    <i className="bi bi-envelope-fill mx-1"></i>
                                    Contact
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar