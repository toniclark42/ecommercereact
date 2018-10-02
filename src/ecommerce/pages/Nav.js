import React from "react";
import { NavLink } from "react-router-dom";
import auth0Client from '../../auth'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" activeStyle={{ color: "#D9A892", borderBottom: "4px solid #DFEBE5)" }} exact>Home</NavLink></li>
                <li><NavLink to="/products" activeStyle={{ color: "#D9A892", borderBottom: "4px solid #DFEBE5" }} exact>Products</NavLink></li>
                <li><NavLink to="/contact" activeStyle={{ color: "#D9A892", borderBottom: "4px solid #DFEBE5" }} exact>Contact</NavLink></li>
                {auth0Client.isAuthenticated() ? <li><NavLink to="/admin" activeStyle={{ color: "#D9A892", borderBottom: "4px solid #DFEBE5" }} exact>Admin</NavLink></li> : null}
                {
                    !auth0Client.isAuthenticated() &&
                    <button className="btn btn-dark" onClick={auth0Client.signIn}>Admin Sign In</button>
                }
                {
                    auth0Client.isAuthenticated() && (
                    <button className="header__auth" onClick={auth0Client.signOut} >Log Out</button>
                )
                }
            </ul>
            
        </nav>     
    )
}




export default Nav;