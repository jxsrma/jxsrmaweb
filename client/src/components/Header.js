import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div className="hcontainer">
            <nav className="navbar">
                <input type="checkbox" name="" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label htmlFor="logo">
                    <a className="active" href="{% url 'index' %}"><img src='images/logo/logo_w.png' className="logo" /></a>
                </label>
                <ul>
                    <li><Link to='/'><a className="active1" disabled>Home</a></Link></li>
                    <li><Link to='/bio'><a className="active2" disabled>Biography</a></Link></li>
                    <li><a className="active3" href="{% url 'rel' %}">Releases</a></li>
                    <li><a className="active4" href="{% url 'shop' %}">Shop</a></li>
                    <li><a className="active5" href="{% url 'demo' %}">Demos</a></li>
                    <li><a className="active6" href="{% url 'cont' %}">Contact</a></li>
                </ul>
            </nav>
        </div>
    
    )
}
