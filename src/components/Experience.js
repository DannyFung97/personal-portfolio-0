import React, { useEffect } from 'react';
import resume from '../assets/ResumeDannyFung.pdf';
import aeec from '../assets/aeec-logo.png';
import sdsc from '../assets/sdsc-logo.png';
import ledgersafe from '../assets/ledgersafe-logo.png';
import btg from '../assets/btg-logo.png';
import { checkAnim } from './animationTrigger';
import './Experience.css'

const Experience = () => {
    useEffect(() => {

    }, [])

    document.addEventListener('scroll', function (e) {
        checkAnim('experience', 'fadeIn');
        let expList = document.getElementById('list');
        let scrollPos = window.scrollY;
        let elementPos = window.pageYOffset + expList.getBoundingClientRect().top + (expList.offsetHeight / 4);
        if (scrollPos + window.innerHeight > elementPos) {
            let experiences = expList.getElementsByClassName('work-exp')
            for (let i = 0; i < experiences.length; i++) {
                let pic = experiences[i].getElementsByClassName('work-exp-pic');
                let info = experiences[i].getElementsByClassName('work-exp-info');
                let description = experiences[i].getElementsByClassName('work-exp-description');
                slideFromLeft(pic[0]);
                slideFromRight(info[0]);
                fadeIn(description[0]);
            }
        }
    })

    function slideFromLeft(pic) {
        if (!pic.classList.contains('anim-done')) {
            pic.classList.add('anim-done')
            pic.animate([
                { transform: 'rotateY(-90deg)' },
                { transform: 'rotateY(0deg)' }
            ],
                {
                    duration: 500,
                    delay: 400,
                    easing: 'ease',
                    fill: 'forwards'
                })
        }
    }

    function slideFromRight(info) {
        if (!info.classList.contains('anim-done')) {
            info.classList.add('anim-done')
            info.animate([
                { transform: 'rotateY(90deg)' },
                { transform: 'rotateY(0deg)' }
            ],
                {
                    duration: 500,
                    delay: 400,
                    easing: 'ease',
                    fill: 'forwards'
                })
        }
    }

    function fadeIn(description) {
        if (!description.classList.contains('anim-done')) {
            description.classList.add('anim-done')
            description.animate([
                { opacity: 0 },
                { opacity: 1 }
            ],
                {
                    duration: 500,
                    delay: 700,
                    easing: 'ease',
                    fill: 'forwards'
                })
        }
    }

    // return (
    //     <div className='container'>
    //         <div id='experience' className='section-content'>
    //             <h1>Experience</h1>
    //             <div className='resume-download'>
    //                 <a href={resume}>
    //                     <button>Resume</button>
    //                 </a>
    //             </div>
    //             <div id='list' className='work-exp-list'>
    //                 <ul>
    //                     <li>
    //                         <div className='work-exp'>
    //                             <div className='work-exp-pic'>
    //                                 <img src={aeec} />
    //                             </div>
    //                             <div className='work-exp-info'>
    //                                 <h2>AEEC, LLC</h2>
    //                                 <h3>June 2020 - Present</h3>
    //                             </div>
    //                             <div className='work-exp-description'>
    //                                 <h2 className='light-text'>Software Engineer</h2>
    //                             </div>
    //                         </div>
    //                     </li>
    //                     <li>
    //                         <div className='work-exp'>
    //                             <div className='work-exp-pic'>
    //                                 <img src={sdsc} />
    //                             </div>
    //                             <div className='work-exp-info'>
    //                                 <h2>San Diego Supercomputer Center</h2>
    //                                 <h3>July 2019 - March 2020</h3>
    //                             </div>
    //                             <div className='work-exp-description'>
    //                                 <h2 className='light-text'>Student Research Assistant</h2>
    //                             </div>
    //                         </div>
    //                     </li>
    //                     <li>
    //                         <div className='work-exp'>
    //                             <div className='work-exp-pic'>
    //                                 <img src={ledgersafe} />
    //                             </div>
    //                             <div className='work-exp-info'>
    //                                 <h2>LedgerSafe</h2>
    //                                 <h3>May 2019 - September 2019</h3>
    //                             </div>
    //                             <div className='work-exp-description'>
    //                                 <h2 className='light-text'>Front-end Developer Intern</h2>
    //                             </div>
    //                         </div>
    //                     </li>
    //                     <li>
    //                         <div className='work-exp'>
    //                             <div className='work-exp-pic'>
    //                                 <img src={btg} />
    //                             </div>
    //                             <div className='work-exp-info'>
    //                                 <h2>Blockchain Technology Group, LLC</h2>
    //                                 <h3>October 2018 - December 2018</h3>
    //                             </div>
    //                             <div className='work-exp-description'>
    //                                 <h2 className='light-text'>Software Engineering Intern</h2>
    //                             </div>
    //                         </div>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
        <div id='experience' className='column has-text-centered pt-6'>
            <h1 className='has-text-black is-size-2'>Experience</h1>
            <div className='resume-download'>
                <a href={resume}>
                    <button>Resume</button>
                </a>
            </div>
            <div className='columns has-text-centered is-centered pt-6'>
                <div id='list' className='column is-10 is-centered'>
                    <div className='columns is-full'>
                        <div className='column'>
                            <img src={aeec} />
                        </div>
                        <div className='column'>
                            <h2 className='has-text-black is-size-3'>AEEC, LLC</h2>
                            <h3 className='has-text-black is-size-3'>June 2020 - Present</h3>
                        </div>
                        <div className='column'>
                            <h2 className='has-text-black is-size-3'>Software Engineer</h2>
                        </div>
                    </div>
                    <div className='columns is-full'>
                        <div className='column'>
                            <img src={sdsc} />
                        </div>
                        <div className='column'>
                            <h2 className='has-text-black is-size-3'>San Diego Supercomputer Center</h2>
                            <h3 className='has-text-black is-size-3'>July 2019 - March 2020</h3>
                        </div>
                        <div className='column'>
                            <h2 className='has-text-black is-size-3'>Student Research Assistant</h2>
                        </div>
                    </div>
                    <div className='columns is-full'>
                        <div className='column'>
                            <img src={ledgersafe} />
                        </div>
                        <div className='column'>
                            <h2 className='has-text-black is-size-3'>LedgerSafe</h2>
                            <h3 className='has-text-black is-size-3'>May 2019 - September 2019</h3>
                        </div>
                        <div className='column'>
                            <h2 className='has-text-black is-size-3'>Front-end Developer Intern</h2>
                        </div>
                    </div>
                    <div className='columns is-full'>
                        <div className='column'>
                            <img src={btg} />
                        </div>
                        <div className='column'>
                            <h2 className='has-text-black is-size-3'>Blockchain Technology Group, LLC</h2>
                            <h3 className='has-text-black is-size-3'>October 2018 - December 2018</h3>
                        </div>
                        <div className='column'>
                            <h2 className='has-text-black is-size-3'>Software Engineering Intern</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;