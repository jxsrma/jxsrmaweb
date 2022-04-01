import React, { useState } from 'react'
import LoginSignCSS from './CSS/LoginSignUp.css'


export const LoginSignUp = () => {
    const [page, setpage] = useState("0") //page = 0 : Login, page = 1 : Sign Up
    const SignUpPage = (e) => {
        setpage("1")
    }
    const loginPage = (e) => {
        setpage("0")
    }
    const loginUser = (e) => {
        alert(page);
    }
    const SignUpUser = (e) => {
        alert(page);
    }
    return (
        <div style={LoginSignCSS}>
            <div className='login'>


                {
                    page == 0 ?
                        <div className='login-page'>
                            <div className='login-heading'>
                                <h3>Login</h3>
                            </div>
                            <from className='login-from'>
                                <input id='login-username' placeholder='Username' className='login-input'></input>
                                <input id='login-password' placeholder='Password' className='login-input' type='password' ></input>
                            </from>
                            <div className='login-button'>

                                <button className='login-button-login' onClick={loginUser} type="button">Login</button>
                                <button className='login-button-signup' onClick={SignUpPage} type="button">Sign Up</button>
                            </div>

                        </div>

                        :
                        <div className='signup-page'>

                            <div className='signup-heading'>
                                <h3>Sign Up</h3>
                            </div>
                            <from className='login-from'>
                                <input id='signup-username' placeholder='Username' className='signup-input'></input>
                                <input id='signup-email' placeholder='Email' className='signup-input' type='email' ></input>
                                <input id='signup-password' placeholder='Password' className='signup-input' type='password' ></input>
                            </from>
                            <div className='signup-button'>

                                <button className='signup-button-login' onClick={loginPage} type="button">Login</button>
                                <button className='signup-button-signup' onClick={SignUpUser} type="button">Sign Up</button>
                            </div>
                        </div>

                }

            </div>

        </div>
    )
}
