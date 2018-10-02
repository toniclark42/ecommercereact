import React, { Component } from 'react';
import './assets/css/App.css';
import Nav from './ecommerce/pages/Nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./ecommerce/pages/home/Home";
import Products from "./ecommerce/pages/products/Products";
import Contact from "./ecommerce/pages/contact/Contact";
import Admin from "./ecommerce/pages/admin/Admin";
import Footer from "./ecommerce/pages/Footer";
import Callback from "./Callback";
import SecuredRoute from './SecuredRoute';

///////////To get everything running
            //in ecommercereact "npm start"
            //in css "npm run watch-css"
            //in bin "./mongod -dbpath ../../mongo-data/"
            //in backend "node server.js"



class App extends Component {
  constructor() {
    super();

    this.state = {
      cakes: [],
      cakeFull: false,
      productType: [],
      contactinfos: [],
      adminSwitch: 'Products',
    };
    // this.callback = this.callback.bind(this);
    this.productFilter = this.productFilter.bind(this);
    this.handleToContactAdmin = this.handleToContactAdmin.bind(this);
    this.handleToProductAdmin = this.handleToProductAdmin.bind(this);
    this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
    this.handleAddById = this.handleAddById.bind(this);
    this.handleOverlay = this.handleOverlay.bind(this);
  }


  //declare function
  //bind function
  //pass function to where it's needed

/////////////////////////// EVERYTHING IN THIS CODE BLOCK GUARANTEES STATE TO HAVE THE DATA
  componentDidMount() {

    fetch('http://localhost:3001/Products/')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState ({
          cakes: data,
          productType: data,
          cakeFull: true
        }, () => console.log(this.state.cakes))
      })

    fetch('http://localhost:3001/form_submission/')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState ({
          contactinfos: data
        }, () => console.log(this.state.contactinfos))
      })
  }

  handleToContactAdmin() {
      let SwitchedAdmin = "Contact"; 
      this.setState({
        adminSwitch: SwitchedAdmin
      });
  }
  
  handleToProductAdmin() {
    let SwitchedAdmin = "Products"; 
    this.setState({
      adminSwitch: SwitchedAdmin
    });
}

  handleAddById(id) {
    fetch(`http://localhost:3001/Products/`, {
      method:'POST'
    }).then(response => response.json());
    window.location.reload();
  }

  handleDeleteProduct(id) {
    fetch(`http://localhost:3001/Products/${id}`, {
      method:'DELETE'
    }).then(response => response.json());
    window.location.reload();
  }

  handleOverlay() {
    const overlay = document.querySelector('.overlay')
    if (overlay.style.display === 'none' || overlay.style.display === '') {
      overlay.style.display = 'flex'
    } else {
      overlay.style.display = 'none'
    }
  }
  
  // callback (el) {
  //   return <ProductCard info={el} key={el.productId} />;
  // }

  productFilter (e) {
    console.log('this.productFilter')
   e.preventDefault();

   var price = document.querySelector('.priceSelector').value;

   var typeArray = this.state.cakes;
    if (document.querySelector('.productSelector').value !== '--' ) {
       typeArray = typeArray.filter(el => {
        if(el.productType === document.querySelector('.productSelector').value) {
          return true;
        } else {
          return false;
        }
      });
    } 

    if (price !== '--' ) {
      typeArray = typeArray.filter(el => {
        var minmax = price.split("-");
        var min = Number(minmax[0]);
        if (minmax.length === 2) {
          var max = Number(minmax[1]); 
          if (el.price >=min && el.price <=max) {
            return true;
          } else {
            return false;
          } 
        } 
        if (el.price >= min) {
          return true;
        } else {
          return false;
        }
      });
    }

    this.setState ({
      productType: typeArray
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Nav />
          </header>
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/products" render={() => (
                <Products productType={this.state.productType}  callback={this.callback} cakeFull={this.state.cakeFull} productFilter={this.productFilter}/>
              )} />
              <Route path="/contact" component={Contact} exact />
              {/* <Route path="/admin" render={() => (
                <Admin productType={this.state.productType}  callback={this.callback} cakeFull={this.state.cakeFull} productFilter={this.productFilter}/>
              )} /> */}
              <Route path='/callback' component={Callback} exact/>
              <SecuredRoute path='/admin' component={Admin} handleToProductAdmin={this.handleToProductAdmin} handleToContactAdmin={this.handleToContactAdmin} handleOverlay={this.handleOverlay} handleDeleteProduct={this.handleDeleteProduct} handleAddById={this.handleAddById} contactinfos={this.state.contactinfos} cakeFull={this.state.cakeFull} handleAdminPage={this.handleAdminPage} adminSwitch={this.state.adminSwitch} productType={this.state.productType} productFilter={this.productFilter} callback={this.callback}/>
            
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

// function ProductCard(props) {
//   return (
//     <div>
//       <div className="productCard adminCard">
//         <h2 className=" productCard__title adminCard__title">{props.info.title}</h2>
//         <img src={props.info.productImages.path} alt={props.info.description} />
//         <p className="productCard__price adminCard__price">${props.info.price}</p>
//         <p className="productCard__description adminCard__description"> {props.info.description}</p>
//       </div>
//     </div>
//   );
// }


export default App;
