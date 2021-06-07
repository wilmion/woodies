import React from 'react';
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload';

import "../assets/scss/components/type.scss";

interface IProps {
    image:string;
    title:string;
    link:string;
    color:string;
}
const Type:React.FC<IProps> = ({image , title , link, color}) => {
    const className:string = `type ${color}`;
    return (<LazyLoad height={500} once>
        <div className={className}>
            <h3 className="type__title">{title}</h3>
            <picture className="type__img">
                <img src={image} alt={title} />
            </picture>
            <Link className="type__button" to={link}>Show Now</Link>
        </div>
    </LazyLoad>)
}

export default Type
