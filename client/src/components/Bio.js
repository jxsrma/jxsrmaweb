import React from "react";
import BioCSS from "../CSS/Bio.css"
import profilePic from "../images/backg/bioprof.jpg";


export const Bio = (props) => {
document.title = 'JXSRMA | ' + props.title

  return (
    <>
      <div className="biocontainer" style={BioCSS}>
        <div className="bioInfo">
          <div className="imgs">
            <img src={profilePic} alt="Profile" />
          </div>
          <h1>JXSRMA</h1>
          <p>
            Jash Sharma is a young and growing music producer from Indore, India
            born on 3rd August 2001. Jash started working in the field of music
            in the year 2017. Noting the fact that without having any musical
            background he successfully released his first music piece in the
            year 2020 titled "All Together" under the pseudonym JXSRMA. Apart
            from his passion for the music field, he is also a computer geek,
            pursuing his graduation in the field of computer science. He is
            still learning and working in the field of music, being a music
            producer he is an amazing artist. After his first release, he has
            released some more of his work and the work he has done is
            commendable.
          </p>
        </div>
      </div>
      <div className="gallery-cont">
        <div className="gallery">
          <img src ="../static/images/images/badminton.jpg" />
          {/* <div className="gallery__column">
              {% for galleryloop in galleryImg %}
              <a href="{{galleryloop.link}}" target="_blank" className="gallery__link">
                  <figure className="gallery__thumb">
                      <img src="{{galleryloop.img.url}}" alt="" className="gallery__image" />
                  </figure>
              </a>
              {% endfor %}
          </div> */}
        </div>
      </div>
    </>
  );
};
