import React from 'react'
import LazyLoad from 'react-lazyload';

import "../assets/scss/components/customItem.scss";

interface IProps {
    image:string;
    title:string;
}

const customItem:React.FC<IProps> = ({title , image}) => {
    return (<LazyLoad height={200}>
        <div className="custom-item">
            <picture className="custom-item__img">
                <img src={image} alt={title} />
            </picture>
            <h4 className="custom-item__title">{title}</h4>
        </div>
    </LazyLoad>)
}

export default customItem
