import React from 'react';
import {Route} from 'react-router-dom';
import auth0Client from './auth';

function SecuredRoute(props) {
  const {component: Component, path, adminSwitch} = props;
  return (
    <Route path={path} render={() => {
        if (!auth0Client.isAuthenticated()) {
          auth0Client.signIn();
          return <div></div>;
        }
        return <Component cakeFull={props.cakeFull} handleAddById={props.handleAddById} onEdit={props.onEdit} handleOverlay={props.handleOverlay} handleDeleteProduct={props.handleDeleteProduct} handleEditProduct={props.handleEditProduct} contactinfos={props.contactinfos} handleToContactAdmin={props.handleToContactAdmin} handleToProductAdmin={props.handleToProductAdmin} adminSwitch={adminSwitch} productType={props.productType} productFilter={props.productFilter} callback={props.callback}/>
    }} />
  );
}

export default SecuredRoute;