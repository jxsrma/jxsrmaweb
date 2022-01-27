import React from 'react';
import ReleasesCSS from '../CSS/Releases.css'

export const Releases = (props) => {
document.title = 'JXSRMA | ' + props.title
return (<div style={ReleasesCSS}>
        <div class="backg" >
            <div class="maininfocon">
                <div class="heading">My Releases</div>
                <div class="para">Click the album art, and choose you favorite streaming platform.</div>
            </div>

            <article class="flow">
                <div class="release">
                    <ul class="auto-grid" role="list">

                        <li>
                            <a href="" target="blank" class="album ">
                                <h2 class="profile__name ">{ }</h2>
                                <p>{ }</p>
                                <img alt="{} " src="{} " />
                            </a>
                        </li>
                    </ul>
                </div>
            </article>
        </div >
    </div >);
};
