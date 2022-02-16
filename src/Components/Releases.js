import React, { useState, useEffect } from "react";
import ReleasesCSS from '../CSS/Releases.css'
import PropagateLoader from "react-spinners/PropagateLoader";

export const Releases = (props) => {
    document.title = 'JXSRMA | ' + props.title

    const [TrackData, setTrackData] = useState([])
    const [loading, setLoading] = useState(false)

    const getTrackData = async () => {

        const response = await fetch('/releases/tracks')

        const trkData = await response.json()
        setTrackData(await trkData.tracks)
        setLoading(false)
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        setLoading(true)
        getTrackData();
    }, []);


    return (
        <div style={ReleasesCSS}>
            <div className="imgBack">

                <div className="backg" >
                    <div className="maininfocon">
                        <div className="heading">My Releases</div>
                        <div className="para">Click the album art, and choose you favorite streaming platform.</div>
                    </div>

                    <article className="flow">
                        <div className="release">
                            <ul className="auto-grid" role="list" >
                                {
                                    loading ?
                                        <PropagateLoader
                                            size={10}
                                            css={
                                                { "padding-left": "50%" }
                                            }
                                            color={"#ffffff"}
                                            loading={loading}
                                        />
                                        :

                                        TrackData.map((element) => {
                                            return (
                                                <>
                                                    <li>
                                                        <a href={element.sLink} target="_blank" rel="noopener noreferrer" className="album ">
                                                            <h2 className="profile__name ">{element.name}</h2>
                                                            <p>{element.genre}</p>
                                                            {/* <img alt={element.altImage} src={"data:image/png;base64," + element.albumart} /> */}
                                                            <img alt={element.altImage} src={element.albumart} />
                                                        </a>
                                                    </li>
                                                </>
                                            )
                                        })
                                }
                            </ul>
                        </div>
                    </article>
                </div >
            </div>
        </div >);
};
