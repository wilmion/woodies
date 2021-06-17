import React from 'react'

import LOGO from '../assets/images/ico/logo.svg';
import ChairBackground from '../assets/images/backgrounds/photo_footer.jpg';

import "../assets/scss/components/footer.scss";

const Footer:React.FC = () => {
    return (
        <footer className="footer" >
            <section className="footer-content">
                <div className="footer-content-info">
                    <div className="footer-content-info__line"></div>
                    <section className="footer-content-info-container">
                        <ul className="footer-content-info-container-column">
                            <li className="footer-content-info-container-column-info-logo">
                                <picture className="footer-content-info-container-column-info-logo__img">
                                    <img src={LOGO} alt="Loge of woodies" />
                                </picture>
                                <h3 className="footer-content-info-container-column-info-logo__title">WOODIES</h3>
                            </li>
                            <li className="footer-content-info-container-column-info">(012) 8967453</li>
                            <li className="footer-content-info-container-column-info">woodies@gmail.com</li>
                            <li className="footer-content-info-container-column-info">Jakarta, Indonesia</li>
                        </ul>
                        <ul className="footer-content-info-container-column">
                            <li className="footer-content-info-container-column-info-title">Product</li>
                            <li className="footer-content-info-container-column-info"><a href="/furniture">Furnitures</a></li>
                            <li className="footer-content-info-container-column-info"><a href="/packages">Packages</a></li>
                            <li className="footer-content-info-container-column-info"><a href="/services">Services</a></li>
                        </ul>
                        <ul className="footer-content-info-container-column">
                            <li className="footer-content-info-container-column-info-title">Resources</li>
                            <li className="footer-content-info-container-column-info">Blog</li>
                            <li className="footer-content-info-container-column-info">FAQs</li>
                            <li className="footer-content-info-container-column-info">Contact Us</li>
                        </ul>
                        <ul className="footer-content-info-container-column">
                            <li className="footer-content-info-container-column-info-title">Company</li>
                            <li className="footer-content-info-container-column-info"> <a href="#about">About Us</a> </li>
                            <li className="footer-content-info-container-column-info">Jobs</li>
                            <li className="footer-content-info-container-column-info">Our Team</li>
                        </ul>
                        <ul className="footer-content-info-container-column">
                            <li className="footer-content-info-container-column-info-title">Follow Us</li>
                            <li className="footer-content-info-container-column-info"><a href="https://www.facebook.com/">Facebook</a></li>
                            <li className="footer-content-info-container-column-info"><a href="https://www.instagram.com/the_wilmion/">Instagram</a></li>
                            <li className="footer-content-info-container-column-info"><a href="https://twitter.com">Twitter</a></li>
                        </ul>
                    </section>          
                </div>
                <div className="footer-content-image">
                    <picture className="footer-content-image__image">
                        <img src={ChairBackground} alt="Photo of woodies" />
                    </picture>
                </div>
            </section>   
            <p className="footer-copirigth">@ 2020 WOODIES</p>
        </footer>
    )
}

export default Footer

