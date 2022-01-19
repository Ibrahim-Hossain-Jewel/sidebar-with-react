import React from "react";
import { Link } from "react-router-dom";
import './header.styles.scss';
const Header = ()=>(
    <div className="header"> 
        <div className="options">
            
            <Link to = '/' className="option">Solutions</Link>
            <Link to = '/industries' className="option">Industries</Link>
            <Link to = '/discover' className="option">Discover</Link>
            <Link to = '/aboutUs' className="option">About Us</Link>
            <Link to = '/careers' className="option">Careers</Link>
        </div>
    </div>
);
export default Header;