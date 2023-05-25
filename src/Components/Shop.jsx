import React, { useEffect } from 'react';
// import { Router, Routes, Route } from 'react-router-dom';
import ShopCSS from '../CSS/Shop.css'
// import { LoginSignUp } from './ShopComponents/LoginSignUp';
export const Shop = (props) => {
    document.title = 'JXSRMA | ' + props.title

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])


    return (<div style={ShopCSS}>
        <div className="shopcont">
            <h1>COMING SOON</h1>            
        </div>
    </div >);
};
