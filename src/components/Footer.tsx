import React from 'react'

import LOGO from '../assets/images/ico/logo.svg';
import ChairBackground from '../assets/images/backgrounds/photo_footer.jpg';

const Footer:React.FC = () => {
    return (
        <footer className="footer" >
            <div className="footer-info">
                <div className="footer-info__line"></div>
                <section className="footer-info-container">
                    <ul className="footer-info-container-column">
                        <li className="footer-info-container-column-info-logo">
                            <picture className="footer-info-container-column-info-logo__img">
                                <img src={LOGO} alt="Loge of woodies" />
                            </picture>
                            <h3 className="footer-info-container-column-info-logo__title">WOODIES</h3>
                        </li>
                        <li className="footer-info-container-column-info">(012) 8967453</li>
                        <li className="footer-info-container-column-info">woodies@gmail.com</li>
                        <li className="footer-info-container-column-info">Jakarta, Indonesia</li>
                    </ul>
                    <ul className="footer-info-container-column">
                        <li className="footer-info-container-column-info-title">Product</li>
                        <li className="footer-info-container-column-info"><a href="/furniture">Furnitures</a></li>
                        <li className="footer-info-container-column-info"><a href="/packages">Packages</a></li>
                        <li className="footer-info-container-column-info"><a href="/services">Services</a></li>
                    </ul>
                    <ul className="footer-info-container-column">
                        <li className="footer-info-container-column-info-title">Resources</li>
                        <li className="footer-info-container-column-info">Blog</li>
                        <li className="footer-info-container-column-info">FAQs</li>
                        <li className="footer-info-container-column-info">Contact Us</li>
                    </ul>
                    <ul className="footer-info-container-column">
                        <li className="footer-info-container-column-info-title">Company</li>
                        <li className="footer-info-container-column-info"> <a href="#about">About Us</a> </li>
                        <li className="footer-info-container-column-info">Jobs</li>
                        <li className="footer-info-container-column-info">Our Team</li>
                    </ul>
                    <ul className="footer-info-container-column">
                        <li className="footer-info-container-column-info-title">Follow Us</li>
                        <li className="footer-info-container-column-info"><a href="https://www.facebook.com/">Facebook</a></li>
                        <li className="footer-info-container-column-info"><a href="https://www.instagram.com/the_wilmion/">Instagram</a></li>
                        <li className="footer-info-container-column-info"><a href="https://twitter.com">Twitter</a></li>
                    </ul>
                </section>          
            </div>
            <div className="footer-image">
                <picture className="footer-image__image">
                    <img src={ChairBackground} alt="Photo of woodies" />
                </picture>
            </div>
            <p className="footer-copirigth">@ 2020 WOODIES</p>
        </footer>
    )
}

export default Footer

