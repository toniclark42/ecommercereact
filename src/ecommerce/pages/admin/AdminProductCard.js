import React from 'react';


const AdminProductCard = (props) => {
    // console.log(props.info);
     return (
        <form className="adminCard" onSubmit={e => props.handleFormSubmit(e, props.info.productID)}>
            { props.onEdit && props.editId === props.info.productID ? <input name="title" defaultValue={props.info.title} onChange={props.handleFormInput}></input> : <p className="adminCard__title" >{props.info.title}</p> }
            { props.onEdit && props.editId === props.info.productID ? <input name="imagePath" defaultValue={props.info.imagePath} onChange={props.handleFormInput}></input> : <p className="adminCard__productImagePath">{props.info.imagePath}</p>}
            { props.onEdit && props.editId === props.info.productID ? <input name="price" defaultValue={props.info.price} onChange={props.handleFormInput}></input> : <p className="adminCard__price">${props.info.price}</p>}
            { props.onEdit && props.editId === props.info.productID ? <input name="description" defaultValue={props.info.description} onChange={props.handleFormInput}></input> : <p className="adminCard__description"> {props.info.description}</p>}
            <div className="adminButtons">
                <button onClick={() => props.handleEditProduct(props.info.productID, props.info.title, props.info.imagePath, props.info.price, props.info.description)} type={props.onEdit && props.editId === props.info.productID ? 'button' : 'submit' }>{props.onEdit && props.editId === props.info.productID ? 'Save' : 'Edit'}</button>
                <button onClick={() => props.handleDeleteProduct(props.info.productID)}>Delete</button>
            </div>
        </form>
    );   
}

export default AdminProductCard