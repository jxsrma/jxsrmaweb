import React, { useState, useEffect } from "react";
import BioCSS from "../CSS/Bio.css"
import profilePic from "../images/backg/bioprof.jpg";
import LogoW from '../images/logo/logo_w.png'
import PropagateLoader from "react-spinners/PropagateLoader";


// let a = ""

export const Bio = (props) => {
  document.title = 'JXSRMA | ' + props.title
  const [ImageData, setImageData] = useState([])
  const [loading, setLoading] = useState(false)

  const getImages = async () => {

    const response = await fetch('/bio/images')

    const imgData = await response.json()
    setLoading(false)
    setImageData(await imgData.Images)
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    setLoading(true)
    getImages();
  }, []);

  return (
    <>
      <div className="biocontainer" style={BioCSS}>
        <div className="bioInfo">
          <div className="imgsContBio">

            <div className="profImgCont">

              <div className="imgs">
                <img src={profilePic} alt="Profile" />
              </div>
            </div>

            <div className="logoBio">
              <img src={LogoW} alt='Logo' />
            </div>
            {/* <h1>JXSRMA</h1> */}
            <p>
              Jash Sharma is a young and growing music producer from Indore, India born on 3rd August 2001. Jash started working in the field of music in the year 2017. Noting the fact that without having any musical background he successfully released his first music piece in the year 2020 titled "All Together" under the pseudonym JXSRMA. Apart from his passion for the music field, he is also a computer geek, pursuing his graduation in the field of computer science. He is still learning and working in the field of music, being a music producer he is an amazing artist. After his first release, he has released some more of his work and the work he has done is commendable.
            </p>
          </div>

        </div>
      </div>
      <div className="gallery-cont" >

        <div className="gallery">
          {
            loading ?
              <PropagateLoader
                size={10}
                css={
                  {
                    "padding-left": "50%",
                    "padding-top": "10%",
                    "padding-bottom": "10%",
                    "display": "block"

                  }
                }
                color={"#ffffff"}
                loading={loading}
              />
              :
              <>
                <div class="masonry">
                  <div class="item">
                    {
                      ImageData.map((element) => {
                        return (
                          <a href={element.link} target="_blank" rel="noopener noreferrer" className="imglink">
                            <img src={element.imgs} className="mainImg"></img>
                          </a>
                        )
                      })}
                  </div>
                </div>
                {/* <div className="gallery__column">
                  <ul className="galleryUL">
                    {

                      ImageData.map((element) => {
                        console.log(element.link);
                        return (
                          <li className="gallery_li">
                            <a href={element.link} target="_blank" rel="noopener noreferrer" className="gallery__link">
                              <figure className="gallery__thumb">
                                <img src={element.imgs} alt="" className="gallery__image" />
                              </figure>
                            </a></li>
                        )
                      })
                    }
                  </ul>
                </div> */}
              </>
          }
        </div>
      </div>
    </>
  );
};