import React from 'react';

const ProductCard = (props) => {
    return (
        <div>
        <div className="productCard">
            <h2 className="productCard__title">{props.info.title}</h2>
            <img src={props.info.path} alt={props.info.description} />
            <p className="productCard__price">${props.info.price}</p>
            <p className="productCard__description"> {props.info.description}</p>
        </div>
        </div>
    );   
}

export default ProductCard