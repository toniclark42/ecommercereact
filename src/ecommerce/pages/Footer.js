import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <nav>
                <ul className="footerUl">
                <li><Link className="footerLink" to="./home">Home</Link></li>
                <li><Link className="footerLink" to="./products">Products</Link></li>
                <li><Link className="footerLink" to="./contact">Contact</Link></li>
                </ul>
            </nav>
            <p>&copy;Clark's Cakes is meant solely for the purpose of education.</p>
        </footer>
    )
}




export default Footer;



