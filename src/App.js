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
            <HomeSection />
            <Navbar />
            <div className='content'>
                <BioSection />
                <SkillSection />
                <ExperienceSection />
                <ProjectSection />
                <ContactSection />
            </div>
        </div>
    )
}

export default App;