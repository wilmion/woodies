import React, {useState} from 'react';
//Components
import CustomItem from '../components/customItem';
import Type from '../components/Type';

//Mocks
import customMock from '../mocks/customMock';
import typeMock from '../mocks/typeMock';

//Images
import Mesa from '../assets/images/backgrounds/Mesa.png';
import ModernDisk from '../assets/images/backgrounds/modern platos.png';
import Cucharas from '../assets/images/backgrounds/cucharas.png';
import Rec1 from '../assets/images/backgrounds/recomendation1.jpg';
import Rec2 from '../assets/images/backgrounds/recomendation2.jpg';


const Home = () => {
    return (
        <div className="home">
            <section className="home-intro">
                <div className="home-intro-info">
                    <h2 className="home-intro-info__subtitle">
                        Are you looking for <strong>woodden furniture</strong>
                        for your place?
                    </h2>
                    <h2 className="home-intro-info__title">This is the Right Place</h2>
                    <button type="button" className="home-intro-info__button">Explore Furniture</button>
                </div>
                <picture className="home-intro__image">
                    <img src={Mesa} alt="Modern desk" />
                </picture>
            </section>
            <div className="home-section-title">
                <h3 className="home-section-title__title">Who we are</h3>
                <div className="home-section-title__line"></div>
                <h3 className="home-section-title__extratitle">ABOUT US</h3>
            </div>
            <section className="home-whoWeAre">
                <section className="home-whoWeAre-segment">
                    <picture className="home-whoWeAre-segment__img">
                        <img src={ModernDisk} alt="modern disk" />
                    </picture>
                    <div className="home-whoWeAre-segment-information">
                        <h3 className="home-whoWeAre-segment-information__title">
                            <strong>WOODIES</strong> is the <strong>home of modern wooden furniture</strong>
                        </h3>
                        <p className="home-whoWeAre-segment-information__desc">the answer to your need for furniture with shapes, sizes and colors.</p>
                    </div>
                </section>
                <section className="home-whoWeAre-segment flex-reverse">
                    <picture className="home-whoWeAre-segment__img">
                        <img src={Cucharas} alt="modern spoons" />
                    </picture>
                    <div className="home-whoWeAre-segment-information">
                        <h3 className="home-whoWeAre-segment-information__title">
                            Customized furniture <strong>made just for you</strong>
                        </h3>
                        <p className="home-whoWeAre-segment-information__desc">Get it easy to adjust furniture to the shape and size of your dwelling or business.</p>
                    </div>
                </section>     
            </section>
            <div className="home-section-title">
                <h3 className="home-section-title__title">How to custom</h3>
                <div className="home-section-title__line"></div>
                <h3 className="home-section-title__extratitle">HOW IT WORKS</h3>
            </div>
            <section className="home-how">
                <div className="home-how__grid">
                    {customMock.map(i => (
                        <CustomItem {...i} />
                    ))}
                </div>
                <button className="home-how__button" type="button">Get Personalized Now</button>
            </section>
            <div className="home-section-title">
                <h3 className="home-section-title__title">What we have</h3>
                <div className="home-section-title__line"></div>
                <h3 className="home-section-title__extratitle">CATEGORIES</h3>
            </div>
            <section className="home-whatWeHave">
                <div className="home-whatWeHave__contain">
                    {typeMock.map(t => (
                        <Type {...t} />
                    ))}
                </div>
            </section>
            <div className="home-section-title">
                <h3 className="home-section-title__title">What they say</h3>
                <div className="home-section-title__line"></div>
                <h3 className="home-section-title__extratitle">TESTIMONY</h3>
            </div>
            <section className="home-testimony">
                <div className="home-testimony-images">
                    <div className="home-testimony-images-contain">
                        <picture className="home-testimony-images-contain__img">
                            <img src={Rec1} alt="Photo spectacular , it's woodies" />
                        </picture>
                    </div>
                    <div className="home-testimony-images-contain">
                        <picture className="home-testimony-images-contain__img">
                            <img src={Rec2} alt="Photo spectacular , it's woodies" />
                        </picture>
                    </div>
                </div>
                <div className="home-testimony__opinions"></div>
            </section>
            <section className="home-subscribe">
                <div className="home-subscribe-information">
                    <h4 className="home-subscribe-information__title">Subscribe to our newsletter</h4>
                    <p className="home-subscribe-information__desc">A monthly digest of the new WOODIES products, hot offers, and resources.</p>
                </div>
                <form className="home-subscribe-form">
                    <label htmlFor="email">
                        <input 
                            type="email" 
                            className="home-subscribe-form__email" 
                            name="email" 
                            id="email" 
                            placeholder="Your email address" 
                        />
                    </label>
                    <input 
                        type="submit" 
                        className="home-subscribe-form__button" 
                        value="Subscribe" 
                    />
                </form>
            </section>
        </div>
    )
}

export default Home
