import React from 'react'
import { FiMenu } from 'react-icons/fi'

import { setAnimation } from '../utils/setAnimation';

//IMAGES
import Logo from '../assets/images/ico/logo.svg'

import "../assets/scss/components/header.scss";

const Header = () => { 

    const toggleMenu = (open:boolean) => {
        const value:string = open ? '0%' : '-100%';

        setAnimation('transform' , `translateX(${value})` , document.getElementById('menu_mobile'))
    }

    return (
        <header className="header">
            <div className="header__menu">
                <FiMenu 
                    className="header__menu__icon" 
                    onClick={() => toggleMenu(true)} 
                />
            </div>
            <nav className="header-nav" id="menu_mobile">
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
                        <a href="#about" className="header-nav-ul-item__link">About Us</a>
                    </li>
                    <li className="header-nav-ul-item">
                        <a href="#howitworks" className="header-nav-ul-item__link">How it works</a>
                    </li>
                    <li className="header-nav-ul-item">
                        <a href="#categories" className="header-nav-ul-item__link">Categories</a>
                    </li>
                    <li className="header-nav-ul-item">
                        <a href="#testimony" className="header-nav-ul-item__link">Testimony</a>
                    </li>
                    <li className="header-nav-ul-item">
                        <a href="/login" className="header-nav-ul-item__signUp">Sing Up</a>
                    </li>
                    <li 
                        onClick={() => toggleMenu(false)} 
                        className="header-nav-ul-item header-nav-ul-item--exit"
                    >Exit Menu</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
