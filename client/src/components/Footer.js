import React, { useState } from 'react';
import FooterCSS from '../CSS/Footer.css'
import validator from 'validator'
import { Link } from "react-router-dom";

export const Footer = () => {

    const [Email, setEmail] = useState('')

    function subscribe() {
        if (Email === '') {
            alert('Please Enter Email First')
        } else if (!validator.isEmail(Email)) {
            alert('Please Check Email Again')
        } else {
            fetch("subs/email", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: btoa(JSON.stringify(Email))
            }).then(result => {
                if (!result.ok) {
                    alert('Error !!Please Try Again Later')
                } else {
                    setEmail('')
                    document.getElementById('emailFooter').value = ''
                }
                return result.json()
            }).then(json => {
                alert(JSON.stringify(json))
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
                            <li><a href="https://instagram.com/jxsrma"><i class="fab fa-instagram" Style="margin-right: 10px"></i>Instagram</a></li>
                            <li><a href="https://www.youtube.com/channel/UC_lMuUU9UkJNM0_KP6Hl2vg"><i class="fab fa-youtube" Style="margin-right: 10px"></i>YouTube</a></li>
                            <li><a href="https://facebook.com/JXSRMA"><i class="fab fa-facebook" Style="margin-right: 10px"></i>Facebook</a></li>
                            <li><a href="https://twitter.com/jxsrma"><i class="fab fa-twitter" Style="margin-right: 10px"></i>Twitter</a></li>
                            <li><a href="https://discord.gg/9DkvHyYWBE"><i class="fab fa-discord" Style="margin-right: 10px"></i>Discord</a></li>
                            <li><a href="https://www.twitch.tv/jxsrma"><i class="fab fa-twitch" Style="margin-right: 10px"></i>Twitch</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Stream</h4>
                        <ul>
                            <li><a href="https://open.spotify.com/artist/76RdxImQYMELfBJ99W7QsE"><i class="fab fa-spotify" Style="margin-right: 10px"></i>Spotify</a></li>
                            <li><a href="https://soundcloud.com/jxsrma"><i class="fab fa-soundcloud" Style="margin-right: 10px"></i>SoundCloud</a></li>
                            <li><a href="https://www.jiosaavn.com/artist/jxsrma-/1,rCDiL19uk_"><img className='jiosaavan' src='https://www.jiosaavn.com/favicon.ico' Style="margin-right: 10px" />JioSaavan</a></li>
                            <li><a href="https://music.amazon.in/artists/B08PNSQ44V/jxsrma"><i class="fab fa-amazon" Style="margin-right: 10px"></i>Amazon</a></li>
                            <li><a href="https://music.apple.com/in/artist/jxsrma/1542925618"><i class="fab fa-apple" Style="margin-right: 10px"></i>Apple</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Info</h4>
                        <ul>
                            <li><Link to="/contact"><i class="fas fa-headset" Style="margin-right: 10px"></i>Contact Us</Link></li>
                            <li><a href="https://www.linkedin.com/in/jash-sharma-607940182/"><i class="fas fa-code" Style="margin-right: 10px"></i>About Developers</a></li>
                            <li><a href="https://github.com/Hacker00619/jxsrmaweb"><i class="fab fa-github" Style="margin-right: 10px"></i>Github Repo</a></li>

                        </ul>
                    </div>

                </div>

            </div>
            <div className='subscribe'>
                <p>Subscribe to my News Letter</p>
                    <input id='emailFooter' type='email' value={Email} onChange={(e) => { setEmail(e.target.value) }} className='input-email' placeholder='Enter Your Email' />
                    <button onClick={subscribe} className='button-email'>Subscribe</button>
            </div>

            <div className='CopyrightFooter'>
                <p>&copy; JXSRMA {new Date().getFullYear()}, LLC. All Rights Reserved</p>

            </div>
        </footer>

    );
};
