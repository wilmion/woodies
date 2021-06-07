import React from 'react'
import LazyLoading from 'react-lazyload';

import LogoObs from '../assets/images/ico/logo-obscure.svg';

interface IProps {
    title:string;
    extraTitle:string;
}

const SectionTitle:React.FC<IProps> = ({title , extraTitle}) => {
    return (
        <LazyLoading height={100} once>
            <div className="home-section-title">
                <picture className="home-section-title__logo">
                    <img src={LogoObs} alt="Logo Page" />
                </picture>
                <h3 className="home-section-title__title">{title}</h3>
                <div className="home-section-title__line"></div>
                <h3 className="home-section-title__extratitle">{extraTitle.toUpperCase()}</h3>
            </div>
        </LazyLoading>
    )
}

export default SectionTitle
