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
            //in css "npm run watch-css" (if not on current react update)
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
      onEdit: false,
      editId: '',
      title: '',
      imagePath: '',
      price: '',
      description: '',
    };
    // this.callback = this.callback.bind(this);
    this.productFilter = this.productFilter.bind(this);
    this.handleToContactAdmin = this.handleToContactAdmin.bind(this);
    this.handleToProductAdmin = this.handleToProductAdmin.bind(this);
    this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
    this.handleOverlayExit = this.handleOverlayExit.bind(this);
    this.handleOverlay = this.handleOverlay.bind(this);
    this.handleEditProduct = this.handleEditProduct.bind(this);
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
        })
      })

    fetch('http://localhost:3001/form_submission/')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState ({
          contactinfos: data
        })
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

  handleDeleteProduct(id) {
    fetch(`http://localhost:3001/Products/${id}`, {
      method:'DELETE'
    }).then(response => response.json());
    window.location.reload();
  }

  handleEditProduct(id) {
    let editing = !this.state.onEdit;
    let editProductId = id;
    this.setState({
      onEdit: editing,
      editId: editProductId
    })
  } 
  
  handleFormInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = (e, id) => {
    const {
      title,
      price,
      imagePath,
      description
    } = this.state;
    let reqbody = {
      title,
      price,
      imagePath,
      description
    };
    this.handleEditFetch(id, reqbody);
    console.log(reqbody)
  }

  handleEditFetch = (id, reqbody) => {
    fetch(
      `http://localhost:3001/product/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(reqbody)
      }
    )
    .then(response => console.log(response))
    .catch(e => console.log(e))
  };

  handleOverlay() {
    const overlay = document.querySelector('.overlay')
    if (overlay.style.display === 'none' || overlay.style.display === '') {
      overlay.style.display = 'flex'
    } else {
      overlay.style.display = 'none'
    }
  }

  handleOverlayExit(e) {
    e.preventDefault();
    document.querySelector('.overlay').style.display = 'none'
 
  }

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
              <Route path='/callback' component={Callback} exact/>
              <SecuredRoute path='/admin' component={Admin} editId={this.state.editId} onEdit={this.state.onEdit} handleFormInput={this.handleFormInput} handleFormSubmit={this.handleFormSubmit} handleOverlayExit={this.handleOverlayExit} handleToProductAdmin={this.handleToProductAdmin} handleToContactAdmin={this.handleToContactAdmin} handleOverlay={this.handleOverlay} handleEditProduct={this.handleEditProduct} handleDeleteProduct={this.handleDeleteProduct} contactinfos={this.state.contactinfos} cakeFull={this.state.cakeFull} handleAdminPage={this.handleAdminPage} adminSwitch={this.state.adminSwitch} productType={this.state.productType} productFilter={this.productFilter} callback={this.callback}/>
            
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
