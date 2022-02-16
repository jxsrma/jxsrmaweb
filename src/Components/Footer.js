import React, { useState } from 'react';
import FooterCSS from '../CSS/Footer.css'
import validator from 'validator'
import { Link } from "react-router-dom";

export const Footer = () => {

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')

    function subscribe() {
        if (Email === '') {
            alert('Please Enter Email')
        } else if (!validator.isEmail(Email)) {
            alert('Please Check Email Again')
        } else if (Name === '') {
            alert('Please Enter Name')
        } else {

            let emailData = {
                "name" : Name,
                "email" : Email,
                "type" : "subs"
            }

            fetch("sevice/subs", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: btoa(JSON.stringify(emailData))
            }).then(result => {
                if (!result.ok) {
                    alert('Error !!Please Try Again Later')
                } else {
                    setName('')
                    setEmail('')
                    document.getElementById('nameFooter').value = ''
                    document.getElementById('emailFooter').value = ''
                }
                return result.json()
            }).then(json => {
                console.log(json.success);
                if(json.success){
                    alert('Subcribed')
                } else {
                    alert('Already Subcribed')
                }
            })
        }
    }

    return (
        <footer className="footer" style={FooterCSS}>
            <div className="fcontainer">
                <div className="row">
                    <div className="footer-col">
                        <h4>Follow</h4>
                        <ul>
                            <li><a href="https://instagram.com/jxsrma" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram" Style="margin-right: 10px"></i>Instagram</a></li>
                            <li><a href="https://www.youtube.com/channel/UC_lMuUU9UkJNM0_KP6Hl2vg" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube" Style="margin-right: 10px"></i>YouTube</a></li>
                            <li><a href="https://facebook.com/JXSRMA" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook" Style="margin-right: 10px"></i>Facebook</a></li>
                            <li><a href="https://twitter.com/jxsrma" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter" Style="margin-right: 10px"></i>Twitter</a></li>
                            <li><a href="https://discord.gg/9DkvHyYWBE" target="_blank" rel="noopener noreferrer"><i class="fab fa-discord" Style="margin-right: 10px"></i>Discord</a></li>
                            <li><a href="https://www.twitch.tv/jxsrma" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitch" Style="margin-right: 10px"></i>Twitch</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Stream</h4>
                        <ul>
                            <li><a href="https://open.spotify.com/artist/76RdxImQYMELfBJ99W7QsE" target="_blank" rel="noopener noreferrer"><i class="fab fa-spotify" Style="margin-right: 10px"></i>Spotify</a></li>
                            <li><a href="https://soundcloud.com/jxsrma" target="_blank" rel="noopener noreferrer"><i class="fab fa-soundcloud" Style="margin-right: 10px"></i>SoundCloud</a></li>
                            <li><a href="https://music.amazon.in/artists/B08PNSQ44V/jxsrma" target="_blank" rel="noopener noreferrer"><i class="fab fa-amazon" Style="margin-right: 10px"></i>Amazon</a></li>
                            <li><a href="https://music.apple.com/in/artist/jxsrma/1542925618" target="_blank" rel="noopener noreferrer"><i class="fab fa-apple" Style="margin-right: 10px"></i>Apple</a></li>
                            <li><a href="https://songwhip.com/jxsrma" target="_blank" rel="noopener noreferrer"><i class="fas fa-headphones" Style="margin-right: 10px"></i>JioSaavan & more</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Info</h4>
                        <ul>
                            <li><Link to="/contact"><i class="fas fa-headset" Style="margin-right: 10px"></i>Contact Us</Link></li>
                            <li><a href="https://www.linkedin.com/in/jash-sharma-607940182/" target="_blank" rel="noopener noreferrer"><i class="fas fa-code" Style="margin-right: 10px"></i>About Developer</a></li>
                            <li><a href="https://github.com/Hacker00619/jxsrmaweb" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" Style="margin-right: 10px"></i>Github Repo</a></li>

                        </ul>
                    </div>

                </div>

            </div>
            <div className='subscribe'>
                <p>Subscribe to my News Letter</p>
                    <input id='nameFooter' type='text' value={Name} onChange={(e) => { setName(e.target.value) }} className='input-name' placeholder='Enter Your Name' /><br/>
                    <input id='emailFooter' type='email' value={Email} onChange={(e) => { setEmail(e.target.value) }} className='input-email' placeholder='Enter Your Email' /><br/>
                    <button onClick={subscribe} className='button-email'>Subscribe</button>
            </div>

            <div className='CopyrightFooter'>
                <p>&copy; JXSRMA {new Date().getFullYear()}, LLC. All Rights Reserved</p>

            </div>
        </footer>

    );
};
