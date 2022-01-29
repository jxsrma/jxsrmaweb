import React from 'react';
import FooterCSS from '../CSS/Footer.css'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
        <footer className="footer" style={FooterCSS}>
            <div className="fcontainer">
                <div className="row">
                    <div className="footer-col">
                        <h4>Follow</h4>
                        <ul>
                            <li><a href="https://instagram.com/jxsrma">Instagram</a></li>
                            <li><a href="https://facebook.com/JXSRMA">Facebook Page</a></li>
                            <li><a href="https://twitter.com/jxsrma">Twitter</a></li>
                            <li><a href="https://discord.gg/9DkvHyYWBE">Discord Server</a></li>
                            <li><a href="https://www.twitch.tv/jxsrma">Twitch</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Stream</h4>
                        <ul>
                            <li><a href="https://open.spotify.com/artist/76RdxImQYMELfBJ99W7QsE">Spotify</a></li>
                            <li><a href="https://soundcloud.com/jxsrma">SoundCloud</a></li>
                            <li><a href="https://www.jiosaavn.com/artist/jxsrma-/1,rCDiL19uk_">Jio Saavan</a></li>
                            <li><a href="https://music.amazon.in/artists/B08PNSQ44V/jxsrma">Amazon Music</a></li>
                            <li><a href="https://music.apple.com/in/artist/jxsrma/1542925618">Apple Music</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Info</h4>
                        <ul>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><a href="https://www.linkedin.com/in/jash-sharma-607940182/">About Developers</a></li>
                        </ul>
                    </div>

                </div>

            </div>
            <p>Copyright &copy; {new Date().getFullYear()} JXSRMA, LLC. All Rights Reserved</p>
        </footer>

  );
};
