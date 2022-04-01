import React, { useEffect } from 'react';
import ShopCSS from '../CSS/Shop.css'
import { LoginSignUp } from './ShopComponents/LoginSignUp';
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

            {/* <h1>COMING SOON</h1> */}
            <h1>Shop</h1>
            <div className='login-signup-form'>

                <LoginSignUp />
            </div>

            <div class="Grid">

            </div>

        </div>
    </div >);
};
