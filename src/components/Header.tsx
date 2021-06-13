import React from 'react'

//IMAGES
import Logo from '../assets/images/ico/logo.svg'

import "../assets/scss/components/header.scss";

const Header = () => {
    return (
        <header className="header">
            <nav className="header-nav">
                <div className="header-nav__loge">
                    <picture className="header-nav__loge__img">
                        <img src={Logo} alt="Logo of woodies" />
                    </picture>
                    <h1 className="header-nav__loge__title">WOODIES</h1>
                </div>
                <ul className="header-nav-ul">
                    <li className="header-nav-ul-item">
                        <a href="/" className="header-nav-ul-item__link">Home</a>
                    </li>
                    <li className="header-nav-ul-item">
                        <a href="/" className="header-nav-ul-item__link">About Us</a>
                    </li>
                    <li className="header-nav-ul-item">
                        <a href="/" className="header-nav-ul-item__link">How it works</a>
                    </li>
                    <li className="header-nav-ul-item">
                        <a href="/" className="header-nav-ul-item__link">Categories</a>
                    </li>
                    <li className="header-nav-ul-item">
                        <a href="/" className="header-nav-ul-item__link">Testimony</a>
                    </li>
                </ul>
                <a href="/login" className="header-nav__signUp">Sing Up</a>
            </nav>
        </header>
    )
}

export default Header
