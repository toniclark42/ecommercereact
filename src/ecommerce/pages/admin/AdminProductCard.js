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
                <button onClick={() => props.handleEditProduct(props.info._id)} type={props.onEdit && props.editId === props.info._id ? 'button' : 'submit' }>{props.onEdit && props.editId === props.info._id ? 'Save' : 'Edit'}</button>
                <button onClick={() => props.handleDeleteProduct(props.info._id)}>Delete</button>
            </div>
        </form>
    );   
}

export default AdminProductCard