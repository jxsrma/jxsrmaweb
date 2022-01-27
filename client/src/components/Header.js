import React, { useState } from 'react';
import LogoW from '../images/logo/logo_w.png'
import HeaderCSS from '../CSS/Header.css'
import PropTypes from 'prop-types'
import { Link, NavLink } from "react-router-dom";

export const Header = (props) => {

    let myStyle = props.active
    let currLink = window.location.pathname + ""
    const [hcontainer, setNavbar] = useState(false)

    const changeBG = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)

        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBG)

    return (
        <div style={HeaderCSS}>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <div className={hcontainer ? 'hcontainer scrollBG' : "hcontainer"}>
                <nav className="navbar" >
                    <input type="checkbox" name="" id="check" />
                    <label for="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                    <label for="logo">
                        <Link className="active" to="/"><img src={LogoW} className="logo" /></Link>
                    </label>
                    <ul>
                        <li><NavLink exact 
                        to="/" activeClassName = 'activeLink'>Home</NavLink></li>
                        <li><NavLink to="/biography" >Biography</NavLink></li>
                        <li><NavLink to="/releases" >Releases</NavLink></li>
                        <li><NavLink to="/shop" >Shop</NavLink></li>
                        <li><NavLink to="/demos" >Demos</NavLink></li>
                        <li><NavLink to="/contact" >Contact</NavLink></li>
                    </ul>
                </nav>
            </div>

        </div >
    );
};

Header.propTypes = {
    title: PropTypes.string,
} 