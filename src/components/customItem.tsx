import React from 'react'

interface IProps {
    image:string;
    title:string;
}

const customItem:React.FC<IProps> = ({title , image}) => {
    return (
        <div className="custom-item">
            <picture className="custom-item__img">
                <img src={image} alt={title} />
            </picture>
            <h4 className="custom-item__title">{title}</h4>
        </div>
    )
}

export default customItem
