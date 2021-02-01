import React from 'react';
import './ProjectColumn.css'

const ProjectColumn = ({ project }) => {

    return (
        <div className='column-container project-container'>
            <div className='project-name'><h2>{project.name}</h2></div>
            <img className='project-img' src={project.img} />
            <div className='project-info'><h3>{project.info}</h3></div>
            <div className='project-url'>
                <a className='nav' href={project.url}>
                    <button>
                        See more
                    </button>
                </a>
            </div>
        </div>
    )
}

export default ProjectColumn;