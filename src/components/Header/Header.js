import './Header.css'
import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="text-center header-part container " >
                <nav className="navbar navbar-expand-lg navbar-light bg-danger mt-0 fixed-top">
                    <div className="container-fluid">
                        <h5 className="navbar-brand text-white fw-bold ">Models.net</h5>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <p className="nav-link active text-white fw-bold" aria-current="page">Home</p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link text-white fw-bold">
                                        Rankings</p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link text-white fw-bold">
                                        Agencies</p>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-dark text-white fw-bold" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <h1>A trusted platform
                    for the entire
                    fashion community</h1>
                <p>The newcomers who made an impact were a diverse group of beauties from around the globe</p>
                <h2>Total Budget : $ 150 Million</h2>
            </div>
        </div>
    );
};

export default Header;