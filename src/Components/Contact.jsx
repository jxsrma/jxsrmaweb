import React, { useState, useEffect } from 'react';
import ContactCSS from '../CSS/Contact.css'
import validator from 'validator'

export const Contact = (props) => {
    document.title = 'JXSRMA | ' + props.title

    const [cName, setcName] = useState('')
    const [cEmail, setcEmail] = useState('')
    const [cSubject, setcSubject] = useState('')
    const [cMess, setcMess] = useState('')
    const [subsNL, setsubsNL] = useState(true)

    let contData = {
        cName,
        cEmail,
        cSubject,
        cMess,
        subsNL
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    function submitMessage() {
        if (contData.cName === '') {
            alert('Name Field Can\'t be Empty')

        } else if (contData.cEmail === '') {
            alert('Email Field Can\'t be Empty')
        } else if (!validator.isEmail(contData.cEmail)) {
            alert('Please Check Email Again')

        } else if (contData.cSubject === '') {
            alert('Subject Field Can\'t be Empty')
        } else if (contData.cMess === '') {
            alert('Message Field Can\'t be Empty')

        } else {
            fetch("/cont/send", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: btoa(JSON.stringify(contData))
            }).then(result => {
                if (!result.ok) {
                    alert('Error !!Please Try Again Later')
                    console.error('Error !!Please Try Again Later')
                } else {
                    document.getElementById('successMessage').innerHTML = 'You\'r Query is Submitted';
                    setcName('')
                    setcEmail('')
                    setcSubject('')
                    setcMess('')
                    setsubsNL(true)
                    document.getElementById("checkboxId").checked = true;
                    for (let i = 1; i < 5; i++) {
                        document.getElementById('contForm' + i).value = '';
                    }
                    return result.json()
                }
            }).then(json => {

            })
        }
    }

    return (<div style={ContactCSS}>
        <div className="contactus">

            <div className='blurbg'>
                <h1>Contact Me</h1>
                <p>Your Query will be recieved by me</p>
            </div>


        </div>
        <div className="contform">
            <div className="info">
                <label>Your Info</label>
                <br />
                <input id='contForm1' value={cName} onChange={(e) => { setcName(e.target.value) }} type="text" name="Cname" placeholder="Enter Your Name" />
                <input id='contForm2' value={cEmail} onChange={(e) => { setcEmail(e.target.value) }} type="email" name="Memail" placeholder="Enter Your Email" />


            </div>

            <div className="subject">

                <label >Subject</label>
                <br />
                <input id='contForm3' value={cSubject} onChange={(e) => { setcSubject(e.target.value) }} type="text" name="Msubject" placeholder="Subject" />

            </div>

            <div className="message">

                <label >Message</label>
                <br />
                <textarea id='contForm4' value={cMess} onChange={(e) => { setcMess(e.target.value) }} type="text" name="Mconserns" placeholder="Enter Your concerns" cols="30" rows="5"></textarea>
                <br />
                <div>
                    <input className="checkbox-subs" type="checkbox" defaultChecked={subsNL} onChange={(e) => { setsubsNL(!subsNL) }} id='checkboxId' />
                    <label className='checkbox-label' htmlFor='checkboxId'>
                        Subscribe to my News Letter
                    </label>
                </div>

                <div className="btncont">
                    <button className='btn' onClick={submitMessage} >Send</button>
                </div>
            </div>
            <p id='successMessage' style={{ "padding-bottom": "40px", "font-size": "15px" }}></p>

        </div>
    </div>);
};
