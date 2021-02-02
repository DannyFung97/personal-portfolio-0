import React, { useEffect } from 'react';
import silhouette from '../assets/silhouette.png';
import './Splash.css'

const Splash = () => {
    useEffect(() => {
        // var intro = document.getElementById("intro");
        // var sil = document.getElementById("silhouette");
        var subtitles = document.getElementsByClassName("splash-subtitle");
        for (let i = 0; i < subtitles.length; i++) {
            subtitles[i].animate([
                { opacity: '0', transform: 'scale(0)' },
                { opacity: '1', transform: 'scale(1.2)', offset: 0.7 },
                { opacity: '1', transform: 'scale(1)' }
            ],
                {
                    duration: 300,
                    delay: 550 * i + 1700,
                    fill: 'forwards'
                })
        }
    }, [])

    return (
        <div className='section'>
            <div className='container'>
                <div className='columns is-centered' style={{ margin: 0 }}>
                    <div id='home' className='splash-container column'>
                        <div id='intro' className='splash-intro-container'>
                            <div className='splash-intro'>
                                <h1>Hi, I'm <span style={{ color: "#fff050" }}>Danny Fung</span>.</h1>
                                <div className='splash-subtitle'><h2 className='is-size-3'>I design</h2></div>
                                <div className='splash-subtitle'><h2 className='is-size-3'>I code</h2></div>
                                <div className='splash-subtitle'><h2 className='is-size-3'>I build</h2></div>
                            </div>
                        </div>
                        <div id='silhouette' className='splash-silhouette'>
                            <img src={silhouette} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Splash;