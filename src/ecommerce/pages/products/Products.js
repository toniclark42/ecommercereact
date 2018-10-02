import React from 'react';
import ProductCard from './ProductCard';

const Products = (props) => {
    
        if (props.cakeFull === false) {
          return null;
        }
       

    //I was getting an accessibility error for not having a label for my selects. I did them correct according to the website but it is still showing wrong
    //https://www.w3.org/WAI/GL/WCAG20/tests/test91.html
        return (
          <div>
            <div className="productsHero">
              <div className="hero_text">
                  <h1>Products Page</h1>
                  <p>Find the cake for any occasion!</p>
              </div>
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
            <div className="allCards">
              {props.productType.map(el => <ProductCard info={el} key={el.productId} />)}
            </div>
            
          </div>
        );
      }
    
    
   
export default Products;