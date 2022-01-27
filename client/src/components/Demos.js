import React from 'react';
import DemosCSS from "../CSS/Demos.css"
export const Demos = (props) => {
document.title = 'JXSRMA | ' + props.title

    return (<div style={DemosCSS}>
        <div className="maininfocontainer">

            <h1>Demo Submittion</h1>
            <p>
                Send your one of the best demos, <br /> I will review them and give constructive feedback.
            </p>

        </div>
        <div className="formcontainer">

            <form action="" method="POST">


                <div className="artinfo">
                    <label for="artname">Artist Info</label>
                    <br />
                    <input type="text" name="artname" placeholder="Enter Your Artist Name" />
                    <input type="email" name="email" placeholder="Enter Your Email" />


                </div>

                <div className="trackinfo">

                    <label for="artname">Track Info</label>
                    <br />
                    <input type="text" name="trackname" placeholder="Enter Track Title" />
                    <input type="url" name="trackurl" placeholder="Enter Track URL" />
                    <br />

                </div>

                <div className="extrainfo">

                    <label for="artname">Notes</label>
                    <br />
                    <textarea type="text" name="infotext" placeholder="Enter any information related to Track. Also add your Social links" cols="30" rows="5"></textarea>
                    <br />

                    <div className="btncont">
                        <input type="submit" value="Submit Track" className="btn" />

                    </div>
                </div>

            </form>

        </div>
    </div>);
};
