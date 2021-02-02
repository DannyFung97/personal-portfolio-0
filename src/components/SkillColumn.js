import React from 'react';
import './SkillColumn.css';

const SkillColumn = ({ title, skills, colorHex }) => {

    return (
        <div id='skill-column-container' className='column-container'>
            <h2 className='has-text-custom is-size-4'>{title}</h2>
            <div id='column-list' className='column-list'>
                <ul style={{ marginLeft: '0' }}>
                    {skills.length > 0 ? skills.map((skill, i) => (
                        <li>
                            <div className='skill-row'>
                                <div className='skill-name'>
                                    <h7 className='has-text-custom is-size-5'>{skill.name}</h7>
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