import React from 'react';


const AdminProductCard = (props) => {
    // console.log(props.info);
     return (
        <form className="adminCard" onSubmit={e => props.handleFormSubmit(e, props.info._id)}>
            { props.onEdit && props.editId === props.info._id ? <input name="title" defaultValue={props.info.title} onChange={props.handleFormInput}></input> : <p className="adminCard__title" >{props.info.title}</p> }
            { props.onEdit && props.editId === props.info._id ? <input name="imagePath" defaultValue={props.info.imagePath} onChange={props.handleFormInput}></input> : <p className="adminCard__productImagePath">{props.info.imagePath}</p>}
            { props.onEdit && props.editId === props.info._id ? <input name="price" defaultValue={props.info.price} onChange={props.handleFormInput}></input> : <p className="adminCard__price">${props.info.price}</p>}
            { props.onEdit && props.editId === props.info._id ? <input name="description" defaultValue={props.info.description} onChange={props.handleFormInput}></input> : <p className="adminCard__description"> {props.info.description}</p>}
            <div className="adminButtons">
<<<<<<< HEAD
                <button onClick={() => props.handleEditProduct(props.info._id)} type={props.onEdit && props.editId === props.info._id ? 'button' : 'submit' }>{props.onEdit && props.editId === props.info._id ? 'Save' : 'Edit'}</button>
                <button onClick={() => props.handleDeleteProduct(props.info._id)}>Delete</button>
=======
                <button onClick={() => props.handleEditProduct(props.info.productID)}>Edit</button>
                <button onClick={() => props.handleDeleteProduct(props.info.productID)}>Delete</button>
>>>>>>> ec9c190556c3ca6b7c2e1c3e3b94392f82e8a991
            </div>
        </form>
    );   
}

export default AdminProductCard