import React from 'react';


const AdminProductCard = (props) => {
    console.log(props.info);
     return (
        <div className="adminCard">
            <p className="adminCard__title">{props.info.title}</p>
            <p className="adminCard__productImagePath">{props.info.imagePath}</p>
            <p className="adminCard__price">${props.info.price}</p>
            <p className="adminCard__description"> {props.info.description}</p>
            <div className="adminButtons">
                <button onClick={() => props.handleEditProduct(props.info.productID)}>Edit</button>
                <button onClick={() => props.handleDeleteProduct(props.info.productID)}>Delete</button>
            </div>
        </div>
    );   
}

export default AdminProductCard