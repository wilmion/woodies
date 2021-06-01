import React from 'react';
import { Link } from 'react-router-dom'

interface IProps {
    image:string;
    title:string;
    link:string;
}

const Type:React.FC<IProps> = ({image , title , link}) => {
    return (
        <div className="type">
            <h3 className="type__title">{title}</h3>
            <picture className="type__img">
                <img src={image} alt={title} />
            </picture>
            <Link className="type__button" to={link}>Show Now</Link>
        </div>
    )
}

export default Type
