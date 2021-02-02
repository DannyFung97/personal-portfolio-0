import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './sections/HomeSection';
import BioSection from './sections/BioSection';
import SkillSection from './sections/SkillSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectSection from './sections/ProjectSection';
import ContactSection from './sections/ContactSection';
import './App.css';

function App() {
    return (
        <div className='portfolio-wrapper'>
            <div className='background'>
                <HomeSection />
                <Navbar />
                <div className='content'>
                    <BioSection />
                    <SkillSection />
                    <ExperienceSection />
                    <ProjectSection />
                    <ContactSection />
                </div>
                <div>
                    <div className="background-anim"></div>
                    <div className="background-anim background-anim-2"></div>
                    <div className="background-anim background-anim-3"></div>
                    <div className="background-anim background-anim-4"></div>
                    <div className="background-anim background-anim-5"></div>
                </div>
            </div>
        </div>
    )
}

export default App;