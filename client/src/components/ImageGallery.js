import React, { useState } from 'react';
// import BioCSS from "../CSS/Bio.css"




export const ImageGallery = () => {

    // const [ImageJson, setImageJson] = useState({})

    // function images() {
    //     fetch("/bio/images", {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         dataType: 'json'
    //     }).then(result => {
    //         if (!result.ok) {
    //             console.error('Can\'t fetch Images from database')
    //         } else {
    //             console.log('Connection Established');
    //             return result.json()
    //         }
    //     }).then(json => {

    //         setImageJson(json)
    //         // console.log(json.Images);
    //         // document.getElementById('text').innerHTML = json['Images']
    //         // setImageJson(json['Image'])
    //         // console.log(JSON.stringify(json.Image));
    //         // console.log(JSON.stringify(ImageJson));
    //         // ImageJson.forEach(element => {
    //         // console.log(element.link)
    //         // });
    //         // for()

    //     })

    //     // console.log(ImageJson)

    // }
    
    return <div>
        <div className="gallery__column">
            <button onClick={images()}>Click Me</button>
            {/* {% for galleryloop in galleryImg %} */}

            {/* <a href="{{galleryloop.link}}" target="_blank" className="gallery__link"> */}
                {/* <figure className="gallery__thumb"> */}
                    {/* <img src={"data:image/png;base64,"+ImageJson.Images.img} alt="" className="gallery__image" /> */}
                {/* </figure> */}
            {/* </a> */}

            {/* {% endfor %} */}

        </div>
    </div>;
};
