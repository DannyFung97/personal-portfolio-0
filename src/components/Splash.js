import React, { useEffect } from 'react';
import silhouette from '../assets/silhouette.png';
import './Splash.css'

const Splash = () => {
    useEffect(() => {
        var subtitles = document.getElementsByClassName("splash-subtitle");
        for (let i = 0; i < subtitles.length; i++) {
            subtitles[i].animate([
                { opacity: '0', transform: 'scale(0)' },
                { opacity: '1', transform: 'scale(1.2)', offset: 0.7 },
                { opacity: '1', transform: 'scale(1)' }
            ],
                {
                    duration: 300,
                    delay: 550 * i + 1550,
                    fill: 'forwards'
                })
        }
    }, [])

    return (
        <div id='home' className='splash-container'>
            <div className='splash-intro-container'>
                <div className='splash-intro'>
                    <h1>Hi, I'm <span style={{ color: "#fff050" }}>Danny Fung</span>.</h1>
                    <div className='splash-subtitle'><h2>I design</h2></div>
                    <div className='splash-subtitle'><h2>I code</h2></div>
                    <div className='splash-subtitle'><h2>I build</h2></div>
                </div>
            </div>
            <div className='splash-silhouette'>
                <img src={silhouette} />
            </div>
            <div className='splash-background'>
                <div className="background-anim"></div>
                <div className="background-anim background-anim-2"></div>
                <div className="background-anim background-anim-3"></div>
                <div className="background-anim background-anim-4"></div>
                <div className="background-anim background-anim-5"></div>
            </div>
        </div>
    );
}

export default Splash;