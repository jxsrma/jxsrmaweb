import React from 'react';
import './bio.css';
import Header from './Header';

export default function Bio() {
    return (
<>        
    <div class="biocontainer">
        <Header/>
    <div class="info">
        <div class="imgs">
            <img src="images/backg/bioprof.jpg" alt="Profile" />
        </div>
        <h1>JXSRMA</h1>
        <p>
            Jash Sharma is a young and growing music producer from Indore, India born on 3rd August 2001. Jash started working in the field of music in the year 2017. Noting the fact that without having any musical background he successfully released his first music
            piece in the year 2020 titled "All Together" under the pseudonym JXSRMA. Apart from his passion for the music field, he is also a computer geek, pursuing his graduation in the field of computer science. He is still learning and working
            in the field of music, being a music producer he is an amazing artist. After his first release, he has released some more of his work and the work he has done is commendable.
        </p>
    </div>
</div>
<div class="gallery-cont">
    <div class="gallery">
        <div class="gallery__column">
            {/* {% for galleryloop in galleryImg %}
            <a href="{{galleryloop.link}}" target="_blank" class="gallery__link">
                <figure class="gallery__thumb">
                    <img src="{{galleryloop.img.url}}" alt="" class="gallery__image" />
                </figure>
            </a>
            {% endfor %} */}
        </div>
    </div>
</div>
</>
    )
}
