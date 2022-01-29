import React from 'react';
import ContactCSS from '../CSS/Contact.css'

export const Contact = (props) => {
    document.title = 'JXSRMA | ' + props.title

    return (<div style={ContactCSS}>
        <div className="contactus">

            <h1>Contact Me</h1>
            <p>Your Query will be recieved by me</p>


        </div>
        <div className="contform">
            <form action="" method="POST">
                <div className="info">
                    <label>Your Info</label>
                    <br />
                    <input type="text" name="Cname" placeholder="Enter Your Name" />
                    <input type="email" name="Memail" placeholder="Enter Your Email" />


                </div>

                <div className="subject">

                    <label >Subject</label>
                    <br />
                    <input type="text" name="Msubject" placeholder="Subject" />

                </div>

                <div className="message">

                    <label >Message</label>
                    <br />
                    <textarea type="text" name="Mconserns" placeholder="Enter Your concerns" cols="30" rows="5"></textarea>
                    <br />

                    <div className="btncont">
                        <input type="submit" value="Send" className="btn" />

                    </div>
                </div>
            </form>
        </div>
    </div>);
};
