import React, { useState, useEffect } from 'react';
import DemosCSS from "../CSS/Demos.css"
import validator from 'validator'

export const Demos = (props) => {
    document.title = 'JXSRMA | ' + props.title

    const [artname, setArtName] = useState('')
    const [email, setEmail] = useState('')
    const [trackname, setTrackName] = useState('')
    const [trackurl, setTrackURL] = useState('')
    const [infotext, setInfoText] = useState('')

    // const [img, setImg] = useState('')

    let demoData = {
        artname,
        email,
        trackname,
        trackurl,
        infotext
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
      }, [])

    function submitDemo() {

        if (demoData.artname === "") {
            alert('Artist Name Field Can\'t be Empty')

        } else if (demoData.email === "") {
            alert('Email Field Can\'t be Empty')
        } else if (!validator.isEmail(demoData.email)) {
            alert('Please Check Email Again')

        } else if (demoData.trackname === "") {
            alert('Track Name Field Can\'t be Empty')

        } else if (demoData.trackurl === "") {
            alert('Track URL Field Can\'t be Empty')
        } else if (!validator.isURL(demoData.trackurl)) {
            alert('Please Check URL Again')

        } else {
            fetch("demo/send", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: btoa(JSON.stringify(demoData))

            }).then(result => {
                if (!result.ok) {
                    alert('Error !!Please Try Again Later')
                    console.error('Error !!Please Try Again Later')
                } else {
                    // console.log(btoa(JSON.stringify(demoData)));
                    document.getElementById('Conf').innerHTML = 'Track is Submitted, You can submit more tracks';
                    setArtName('')
                    setEmail('')
                    setTrackName('')
                    setTrackURL('')
                    setInfoText('')

                    for (let i = 1; i < 6; i++) {
                        document.getElementById('demoForm' + i).value = '';
                    }

                    return result.json()
                }
            }).then(json => {
            //   alert(JSON.stringify(json))
            })
        }
    }

    return (<div style={DemosCSS}>
        <div className="maininfocontainer">
            <div className='blurbg'>

            <h1>Demo Submittion</h1>
            <p>
                Send your one of the best demos, <br /> I will review them and give constructive feedback.
            </p>
            </div>
        </div>
        <div className="formcontainer">
            <div className="artinfo">
                <label htmlFor="artname">Artist Info</label>
                <br />
                <input id='demoForm1' value={artname} onChange={(e) => { setArtName(e.target.value) }} type="text" name="artname" placeholder="Enter Your Artist Name" />
                <input id='demoForm2' value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" name="email" placeholder="Enter Your Email" />
            </div>
            <div className="trackinfo">
                <label htmlFor="artname">Track Info</label>
                <br />
                <input id='demoForm3' value={trackname} onChange={(e) => { setTrackName(e.target.value) }} type="text" name="trackname" placeholder="Enter Track Title" />
                <input id='demoForm4' value={trackurl} onChange={(e) => { setTrackURL(e.target.value) }} type="url" name="trackurl" placeholder="Enter Track URL" />
                <br />
            </div>
            <div className="extrainfo">
                <label htmlFor="artname">Notes</label>
                <br />
                <textarea id='demoForm5' value={infotext} onChange={(e) => { setInfoText(e.target.value) }} type="text" name="infotext" placeholder="Enter any information related to Track. Also add your Social links" cols="30" rows="5"></textarea>
                <br />
                <div className="btncont">
                    <button onClick={submitDemo} className='btn' >Submit</button>
                </div>
            </div>
            <p id='Conf' style={{ "padding-bottom": "40px", "font-size": "15px" }}></p>
        </div>
    </div>);
};
