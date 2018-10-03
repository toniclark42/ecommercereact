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
                <button>Edit</button>
                <button onClick={() => props.handleDeleteProduct(props.info._id)}>Delete</button>
            </div>
        </div>
    );   
}

export default AdminProductCard