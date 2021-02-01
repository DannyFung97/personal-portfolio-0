import React, { useEffect } from 'react';
import danny from '../assets/danny.png'
import { checkAnim } from './animationTrigger';
import './Bio.css';

const Bio = () => {

    document.addEventListener('scroll', function (e) {
        checkAnim('bio', 'fadeIn');
        let bio = document.getElementById('bio');
        let scrollPos = window.scrollY;
        let elementPos = window.pageYOffset + bio.getBoundingClientRect().top + (bio.offsetHeight / 4);
        if (scrollPos + window.innerHeight > elementPos) {
            let descriptions = bio.getElementsByClassName('bio-description');
            for (let i = 0; i < descriptions.length; i++) {
                popIn(descriptions[i], i)
            }
        }
    })

    function popIn(description, i) {
        if (!description.classList.contains('anim-done')) {
            description.classList.add('anim-done')
            description.animate([
                { opacity: '0' },
                { opacity: '1' }
            ],
                {
                    duration: 300,
                    delay: 550 * i + 400,
                    fill: 'forwards'
                })
        }
    }

    return (
        // <div className='container'>
        //     <div id='bio' className='section-content'>
        //         <h1>Bio</h1>
        //         <div id='bio-photo-div' className='bio-photo'>
        //             <img src={danny} />
        //         </div>
        //         <div className='bio-paragraph'>
        //             <h2 className='bio-description'>
        //                 I'm a Full Stack Web Developer from San Francisco, CA.
        //             </h2>
        //             <h2 className='bio-description'>
        //                 I've worked with multiple organizations to create user interfaces and applications.
        //                 As a curious problem solver, I enjoy learning about new things and building cool projects.
        //             </h2>
        //         </div>
        //     </div>
        // </div>
        <div className='columns is-centered pt-6'>
            <div id='bio' className="column has-text-centered is-10">
                <h1 className='has-text-black is-size-2'>Bio</h1>
                <div id='bio-photo-div' className='bio-photo'>
                    <img src={danny} />
                </div>
                <div className='bio-paragraph'>
                    <h2 className='has-text-black is-size-3'>
                        I'm a Full Stack Web Developer from San Francisco, CA.
                </h2>
                    <h2 className='has-text-black is-size-3'>
                        I've worked with multiple organizations to create user interfaces and applications.
                        As a curious problem solver, I enjoy learning about new things and building cool projects.
                </h2>
                </div>
            </div>
        </div>
    )
}

export default Bio;