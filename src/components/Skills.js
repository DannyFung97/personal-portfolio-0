import React from 'react';
import SkillColumn from './SkillColumn';
import { checkAnim } from './animationTrigger'
import './Skills.css'

const Skills = () => {

    const colors = ['#0083f0', '#725286', '#e3211c'];

    const skills = [[
        //languages
        { name: 'JavaScript', mastery: 90 },
        { name: 'HTML', mastery: 85 },
        { name: 'CSS', mastery: 80 },
        // { name: 'C#', mastery: 80 },
        { name: 'Java', mastery: 80 },
        // { name: 'C++', mastery: 75 },
        { name: 'Solidity', mastery: 70 },
        { name: 'Python', mastery: 65 },
        { name: 'SQL', mastery: 65 },
        // { name: 'C', mastery: 60 },
    ],[
        //frameworks
        { name: 'Node.js', mastery: 90 },
        { name: 'Express.js', mastery: 85 },
        { name: 'React', mastery: 90 },
        { name: 'Gatsby', mastery: 85 },
        { name: 'Redux', mastery: 70 },
    ],[
        //dev tools
        { name: 'GitHub', mastery: 90 },
        { name: 'VS Code', mastery: 90 },
        { name: 'Bootstrap', mastery: 80 },
        { name: 'MongoDB', mastery: 70 },
        { name: 'Docker', mastery: 60 },
        { name: 'Terminal', mastery: 75 }
    ]]

    document.addEventListener('scroll', function (e) {
        checkAnim('skills', 'fadeIn');
        let columnGroup = document.getElementById('columns');
        let scrollPos = window.scrollY;
        let elementPos = window.pageYOffset + columnGroup.getBoundingClientRect().top + (columnGroup.offsetHeight / 4);
        if (scrollPos + window.innerHeight > elementPos) {
            let columns = document.getElementsByClassName('column-list')
            for (let i = 0; i < columns.length; i++){
                let barsToFill = columns[i].getElementsByClassName('skill-bar-amount')
                fill(barsToFill, i);
            }
        }
    })

    function fill(list, i) {
        for (let j = 0; j < list.length; j++) {
            if (!list[j].classList.contains('anim-done')) {
                list[j].classList.add('anim-done')
                list[j].animate([
                    { width: '20%' },
                    { width: skills[i][j].mastery + '%' }
                ],
                    {
                        duration: 500,
                        delay: 100 * j + 300,
                        easing: 'ease',
                        fill: 'forwards'
                    })
            }
        }
    }

    return (
        <div className='skills-container'>
            <div id='skills' className='skills'>
                <h1>Skills</h1>
                <div id='columns' className='skill-columns'>
                    <SkillColumn title={'Languages'} skills={skills[0]} colorHex={colors[0]} />
                    <SkillColumn title={'Frameworks'} skills={skills[1]} colorHex={colors[1]} />
                    <SkillColumn title={'Dev Tools'} skills={skills[2]} colorHex={colors[2]} />
                </div>
            </div>
        </div>
    )
}

export default Skills;