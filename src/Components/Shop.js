import React, { useEffect } from 'react';
import ShopCSS from '../CSS/Shop.css'

export const Shop = (props) => {
    document.title = 'JXSRMA | ' + props.title

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])


    return (<div style={ShopCSS}>
        <div class="shopcont">

            <h1>COMING SOON</h1>

            <div class="Grid">

            </div>

        </div>
    </div >);
};
