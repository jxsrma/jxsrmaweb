import React, { useEffect, useState } from "react";
import HomeCSS from "../CSS/Home.css";
//"+{backg}+"
export const Home = (props) => {
  document.title = "JXSRMA | " + props.title;
  const [YoutubeVideo, setYoutubeVideo] = useState([]);

  const getYTVideo = async () => {
    const response = await fetch("sevice/home/ytvideo");
    const ytLink = await response.json();
    setYoutubeVideo(await ytLink.YTLink);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    getYTVideo();
  }, []);

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

          <div className="YT">
            <iframe
              src={YoutubeVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h1>My Spotify</h1>
          <div className="spotify-artist">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/artist/76RdxImQYMELfBJ99W7QsE?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              title="Spotify"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
