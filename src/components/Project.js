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
            info: "A web app that stores newly created tasks and also allows the user to check off tasks.",
            url: 'https://github.com/DannyFung97/task-list-react-project'
        },
        {
            name: 'Randomized Breakout',
            img: breakout,
            info: "A game project built based on the Breakout arcade game with tweaked mechanics.",
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
            console.log(containers)
            for (let i = 0; i < containers.length; i++) {
                if (!containers[i].classList.contains('anim-done')) {
                    containers[i].classList.add('anim-done')
                    containers[i].animate([
                        { transform: 'rotateY(90deg)' },
                        { transform: 'rotateY(0deg)' }
                    ],
                        {
                            duration: 200,
                            delay: i * 200 + 200,
                            easing: 'ease',
                            fill: 'forwards'
                        })
                }
            }
        }
    })

    return (
        <div className='container'>
            <div id='projects' className='section-content'>
                <h1>Projects</h1>
                <div className='column-group project-row'>
                    <ProjectColumn project={projects[0]} />
                    <ProjectColumn project={projects[1]} />
                </div>
                <div className='column-group project-row'>
                    <ProjectColumn project={projects[2]} />
                    <ProjectColumn project={projects[3]} />
                </div>
            </div>
        </div>
    )
}

export default Project;