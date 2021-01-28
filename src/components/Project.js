import React from 'react';
import { checkAnim } from './animationTrigger'
import './Project.css';

const Project = () => {

    const projects = [
        { name: 'Image Gallery', img: '', url: '' },
        { name: 'Claims List', img: '', url: '' },
    ]

    document.addEventListener('scroll', function (e) {
        checkAnim('projects', 'fadeIn');
    })

    return (
        <div className='projects-container'>
            <div id='projects' className='projects'>
                <h1>My Projects</h1>
                <div className='project-list'>
                    <div className='project'>
                        <div className='project-name'><h2>Project</h2></div>
                        <div className='project-info'><h3>This is a project about a project.</h3></div>
                        <div className='project-url'>
                            <button className='project-button'>
                                See more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;