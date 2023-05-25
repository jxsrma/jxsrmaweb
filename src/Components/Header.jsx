import React, { useState } from 'react';
import LogoW from '../images/logo/logo_w.png'
import HeaderCSS from '../CSS/Header.css'
import PropTypes from 'prop-types'
import { Link, NavLink } from "react-router-dom";

export const Header = (props) => {

    const [hcontainer, setNavbar] = useState(false)
    const [click, setClick ] = useState(false)
    // const [checkBox, setCheck] = useState(false)

    const changeBG = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)

        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBG)

    const handleClick = () => {
        setClick(!click)
    }

    const changeCheckBox = () =>{
        document.getElementById("check").checked = false;
        handleClick();
    }

    return (
        <div style={HeaderCSS}>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <div className={hcontainer ? 'hcontainer scrollBG' : "hcontainer"}>
                <nav className="navbar" >
                    <input type="checkbox" name="" id="check" />
                    <label htmlFor="check" className="checkbtn">
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} onClick={handleClick} />
                    </label>
                    <label htmlFor="logo">
                        <Link to="/"><img src={LogoW} className="logo" alt='Logo' /></Link>
                    </label>
                    <ul className='blur-b'>
                        <li><NavLink to="/" onClick={changeCheckBox}>Home</NavLink></li>
                        <li><NavLink to="/biography" onClick={changeCheckBox}>Biography</NavLink></li>
                        <li><NavLink to="/releases" onClick={changeCheckBox}>Releases</NavLink></li>
                        <li><NavLink to="/shop" onClick={changeCheckBox}>Shop</NavLink></li>
                        <li><NavLink to="/demos" onClick={changeCheckBox}>Demos</NavLink></li>
                        <li><NavLink to="/contact" onClick={changeCheckBox}>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>

        </div >
    );
};

Header.propTypes = {
    title: PropTypes.string,
} 