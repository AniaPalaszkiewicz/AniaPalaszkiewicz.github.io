import React from 'react';
import "./AboutMe.scss";
import zdjecie from "./zdjecie.jpg"
import {SocialMediaIconsReact} from 'social-media-icons-react';

export default function AboutMe() {
    return (
            < div className="about">
                <img className="imgMe" src='/zdjecie.jpg'/>
                <div>
                    <h1>Anna Pałaszkiewicz<br></br>
                        Junior Front-End Developer</h1>
                    <p>Zaczynam swoją ścieżkę, jeżeli chodzi o programowanie, bardzo mi się to podoba i chcę się w tym
                        kierunku rozwijać.
                        Aplikacja narciarska to mój pierwszy samodzielny projekt i włożyłam w nią całe serce, tak jak we
                        wszystko, co robię.
                        <br></br></p>
                    <div>
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid"
                                               icon="github" iconColor="rgba(255,255,255,1)"
                                               backgroundColor="rgba(51,55,55,1)" iconSize="5" roundness="50%"
                                               url="https://github.com/AniaPalaszkiewicz" target="_blank" size="20"/>
                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid"
                                               icon="linkedin" iconColor="rgba(255,255,255,1)"
                                               backgroundColor="rgba(28,186,223,1)" iconSize="5" roundness="20%"
                                               url="https://www.linkedin.com/in/aniapalaszkiewicz"
                                               target="_blank" size="20"/>
                    </div>
                </div>
            </div>
    );
}


