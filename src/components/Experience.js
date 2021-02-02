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
            let columnContainers = expList.getElementsByClassName('column-container')
            for (let i = 0; i < columnContainers.length; i++) {
                appear(columnContainers[i], i);
            }
        }
    })

    function appear(column, i) {
        if (!column.classList.contains('anim-done')) {
            column.classList.add('anim-done')
            column.animate([
                { opacity: 0, transform: 'translateY(20%)' },
                { opacity: 1, transform: 'translateY(0%)' }
            ],
                {
                    duration: 1000,
                    delay: i * 200 + 200,
                    easing: 'ease',
                    fill: 'forwards'
                })
        }
    }

    return (
        <div className='section'>
            <div className='container'>
                <div className='columns is-centered'>
                    <div className='column has-text-centered is-12 has-background-white py-6'>
                        <div className='columns is-centered'>
                            <div className='column has-text-centered is-11'>
                                <div className='pt-6'>
                                    <div id='experience' className='container is-narrow pt-6' style={{ opacity: 0 }}>
                                        <h1 className='has-text-custom is-size-2 pt-6'>Experience</h1>
                                        <div className='resume-download'>
                                            <a href={resume}>
                                                <button>Resume</button>
                                            </a>
                                        </div>
                                    </div>
                                    <div id='list' className='columns has-text-centered is-centered is-relative py-6'>
                                        <div className='column column-container'>
                                            <img src={aeec} />
                                            <h2 className='has-text-custom is-size-4'>AEEC, LLC</h2>
                                            <h3 className='has-text-custom is-size-5 has-text-weight-normal'>June 2020 - Present</h3>
                                            <h2 className='has-text-custom is-size-4'>Software Engineer</h2>
                                        </div>
                                        <div className='column column-container'>
                                            <img src={sdsc} />
                                            <h2 className='has-text-custom is-size-4'>San Diego Supercomputer Center</h2>
                                            <h3 className='has-text-custom is-size-5 has-text-weight-normal'>July 2019 - March 2020</h3>
                                            <h2 className='has-text-custom is-size-4'>Student Research Assistant</h2>
                                        </div>
                                        <div className='column column-container'>
                                            <img src={ledgersafe} />
                                            <h2 className='has-text-custom is-size-4'>LedgerSafe</h2>
                                            <h3 className='has-text-custom is-size-5 has-text-weight-normal'>May 2019 - September 2019</h3>
                                            <h2 className='has-text-custom is-size-4'>Front-end Developer Intern</h2>
                                        </div>
                                        <div className='column column-container'>
                                            <img src={btg} />
                                            <h2 className='has-text-custom is-size-4'>Blockchain Technology Group, LLC</h2>
                                            <h3 className='has-text-custom is-size-5 has-text-weight-normal'>October 2018 - December 2018</h3>
                                            <h2 className='has-text-custom is-size-4'>Software Engineering Intern</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;