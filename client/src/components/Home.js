import React from "react";
import HomeCSS from "../CSS/Home.css"
//"+{backg}+"
export const Home = (props) => {

document.title = 'JXSRMA | ' + props.title

  return (
    <>
      <div style={HomeCSS}>
          <div className="banner">
            <div className="home">
              <h1>WELCOME</h1>
            </div>
        </div>

        <div className="homep">
          <h1>Latest Release</h1>
          <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/zCSOgzEbbpE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};
