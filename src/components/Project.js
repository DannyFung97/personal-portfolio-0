import React from 'react';
import { checkAnim } from './animationTrigger';
import ProjectColumn from './ProjectColumn';
import imagegallery from '../assets/image-gallery.png';
import tasklist from '../assets/task-list.png';
import breakout from '../assets/breakout.png';
import reinbow from '../assets/reinbow.png';
import './Project.css';

const Project = () => {

    const projects = [
        {
            name: 'Image Gallery',
            img: imagegallery,
            info: "An image gallery made from scratch using the Gatsby framework.",
            url: 'https://dannygallery.cloud/'
        },
        {
            name: 'Task List',
            img: tasklist,
            info: "A web app that stores user-created tasks and allows check offs.",
            url: 'https://github.com/DannyFung97/task-list-react-project'
        },
        {
            name: 'Randomized Breakout',
            img: breakout,
            info: "A game project built based on the Breakout arcade game.",
            url: 'https://dannyfung97.github.io/randomized-breakout/'
        },
        {
            name: 'Reinbow',
            img: reinbow,
            info: "A fictitious company web page made using the CSS framework Bulma.",
            url: 'https://github.com/DannyFung97/reinbow-bulma-website'
        }
    ]

    document.addEventListener('scroll', function (e) {
        checkAnim('projects', 'fadeIn');
        let projects = document.getElementById('projects');
        let scrollPos = window.scrollY;
        let elementPos = window.pageYOffset + projects.getBoundingClientRect().top + (projects.offsetHeight / 4);
        if (scrollPos + window.innerHeight > elementPos) {
            let containers = projects.getElementsByClassName('column-container')
            for (let i = 0; i < containers.length; i++) {
                if (!containers[i].classList.contains('anim-done')) {
                    containers[i].classList.add('anim-done')
                    containers[i].animate([
                        { opacity: 0, transform: 'rotateY(90deg)' },
                        { opacity: 1, transform: 'rotateY(0deg)' }
                    ],
                        {
                            duration: 900,
                            delay: i * 100 + 100,
                            easing: 'ease',
                            fill: 'forwards'
                        })
                }
            }
        }
    })

    return (
        <div className='section'>
            <div className='container'>
                <div className='box'>
                    <div className='content'>
                        <div className='columns is-centered'>
                            <div className='column has-text-centered is-12 has-background-white py-6'>
                                <div className='columns is-centered'>
                                    <div className='column has-text-centered is-11'>
                                        <div id='projects' className='pt-6' style={{ opacity: 0 }}>
                                            <h1 className='has-text-custom is-size-2 pt-6'>Projects</h1>
                                            <div className='columns is-centered'>
                                                <div className="column is-5">
                                                    <ProjectColumn project={projects[0]} />
                                                </div>
                                                <div className="column is-5">
                                                    <ProjectColumn project={projects[1]} />
                                                </div>
                                            </div>
                                            <div className='columns is-centered'>
                                                <div className="column is-5">
                                                    <ProjectColumn project={projects[2]} />
                                                </div>
                                                <div className="column is-5">
                                                    <ProjectColumn project={projects[3]} />
                                                </div>
                                            </div>
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

export default Project;