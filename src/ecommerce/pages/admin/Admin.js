import React from 'react';
import AdminProductCard from './AdminProductCard';
import AdminContactCard from './AdminContactCard';

const AdminProducts = (props) => {
    
       
        if (props.cakeFull === false) {
            return null;
          }
        // console.log(arrayOfCards);
    //I was getting an accessibility error for not having a label for my selects. I did them correct according to the website but it is still showing wrong
    //https://www.w3.org/WAI/GL/WCAG20/tests/test91.html
        return (
          <div>
            <div className="adminHero">
              <div className="hero_text">
                  <h1>Admin Page</h1>
                  <p>Create, Edit, Delete Products!</p>
              </div>
            </div> 
            <div className="formHeader">
              <div className="switchButtons">
                <button className="switch" onClick={props.handleToProductAdmin}>Products</button>
                <button className="switch" onClick={props.handleToContactAdmin}>Contact Submits</button>
              </div>
              <form className="productForm" onSubmit={props.productFilter} >
                <div className="formSelect">
                  <label htmlFor="productSelector">Type:</label>
                  <select id="productSelect" className="productSelector selector" name="productType">
                    <option value="--">--</option>
                    <option value="Cake">Cake</option>
                    <option value="Cupcakes">Cupcake</option>
                  </select>
                </div>
                <div className="formSelect">
                <label htmlFor="priceSelect">Price:</label>
                  <select id="priceSelect" className="priceSelector selector" name="price">
                    <option value="--">--</option>
                    <option value="75-99">75-99</option>
                    <option value="100-149">100-149</option>
                    <option value="150-199">150-199</option>
                    <option value="200+">200+</option>
                  </select>
                </div>  
                <input className="submit" type="submit" value="submit"/>
              </form>
              <button className="addButton" onClick={props.handleOverlay}>Add</button>
            </div>
            <div className="overlay">
              <h2>Add A New Product:</h2>
              <form name="addProductForm" className="addProductForm" method="post" action="http://localhost:3001/Products">
                <label htmlFor="title" className="addProductInfo">Title:</label> 
                <input type="text"  id="title" name="title"/>
                <label htmlFor="price" className="addProductInfo">Price:</label> 
                <input type="number"  id="price" name="price"/>
                <label htmlFor="description" className="addProductInfo">Description:</label> 
                <input type="text"  id="description" name="description"/>
                <label htmlFor="imagePath" className="addProductInfo">Image Path:</label> 
                <input type="text"  id="imagePath" name="imagePath"/>
                <label htmlFor="quantity" className="addProductInfo">Quantity:</label> 
                <input type="number"  id="quantity" name="quantity"/>
                <label htmlFor="type" className="addProductInfo">Cake or Cupcake:</label> 
                <input type="text"  id="productType" name="productType"/>
                <label htmlFor="category" className="addProductInfo">Category:</label> 
                <input type="text"  id="productCategory" name="productCategory"/>
                <div className="overlayButtons">
                  <input className="submit" type="submit" value="submit"/>
                  <button className="exitButton" onClick={props.handleOverlayExit}>Exit</button>
                </div>
              </form>
            </div>
            {/* <div className="adminCards">
              {props.productType.map(el => <AdminProductCard info={el} key={el.productId} />)}
            </div>
            <div className="adminContactCards">
              {props.contactinfos.map(el => <AdminContactCard info={el} key={el._id} />)}
            </div> */}
            {props.adminSwitch === "Products" ? 
              <div className="adminCards">{props.productType.map(el => <AdminProductCard info={el} key={el._id} onEdit={props.onEdit} editId={props.editId} handleFormInput={props.handleFormInput} handleFormSubmit={props.handleFormSubmit} handleDeleteProduct={props.handleDeleteProduct} handleEditProduct={props.handleEditProduct} handleAddById={props.handleAddById} />)}</div> 
              : <div className="adminContactCards">{props.contactinfos.map(el => <AdminContactCard info={el} key={el._id} />)}</div>}
          </div>
        );
      }

export default AdminProducts;