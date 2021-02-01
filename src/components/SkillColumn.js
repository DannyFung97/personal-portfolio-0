import React from 'react';
import './SkillColumn.css';

const SkillColumn = ({ title, skills, colorHex }) => {

    return (
        <div id='skill-column-container' className='column-container'>
            <h2>{title}</h2>
            <div id='column-list' className='column-list'>
                <ul>
                    {skills.length > 0 ? skills.map((skill, i) => (
                        <li>
                            <div className='skill-row'>
                                <div className='skill-name'>
                                    {skill.name}
                                </div>
                                <div className='skill-bar'>
                                    <div className="skill-bar-amount" style={{ 'backgroundColor': colorHex }}><span className='skill-score'>{skill.mastery}</span></div>
                                </div>
                            </div>
                        </li>
                    )) : null}
                </ul>
            </div>
        </div>
    )
}

export default SkillColumn;