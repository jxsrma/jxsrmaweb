import React from 'react';
import Header from './Header';
import './style.css';
export default function LandingPage() {
    return (
        <>
        <div className="fix">
            <div className="banner">
                <Header/>
                <div className="home">
                    <h1>WELCOME</h1>
                </div>
            </div>
        </div>

        <div className="homep">
            <h1>Latest Release</h1>
            <iframe width="853" height="480" src="https://www.youtube.com/embed/O6tnEEt4XSk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </>        
    )
}