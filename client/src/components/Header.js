import React from 'react';
import LogoW from '../images/logo/logo_w.png'
import HeaderCSS from '../CSS/Header.css'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export const Header = (props) => {
    let myStyle = props.active
    return (<div style={HeaderCSS}>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <div className="hcontainer" >
            <nav className="navbar">
                <input type="checkbox" name="" id="check" />
                <label for="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label for="logo">
                    <Link className="active" to="/"><img src={LogoW} className="logo" /></Link>
                </label>
                <ul>
                    <li><Link className="active1" to="/" >Home</Link></li>
                    <li><Link className="active2" to="biography">Biography</Link></li>
                    <li><Link className="active3" to="/releases">Releases</Link></li>
                    <li><Link className="active4" to="/shop">Shop</Link></li>
                    <li><Link className="active5" to="/demos">Demos</Link></li>
                    <li><Link className="active6" to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>

    </div>
    );
};

Header.propTypes = {
    title: PropTypes.string,
} 