import React, { useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    let element;
    let sticky;

    useEffect(() => {
        element = document.getElementById('nav-container');
        sticky = element.offsetTop;
    }, [])

    document.addEventListener('scroll', function (e) {
        if (element != undefined) {
            if (window.pageYOffset >= sticky) {
                element.classList.add("sticky")
            } else {
                element.classList.remove("sticky");
            }
        }
    })

    return (
        <div id='nav-container' className='nav-container'>
            <ul>
                <li><a href='#home'><div className='nav-highlighter'>Home</div></a></li>
                <li><a href='#bio'><div className='nav-highlighter'>Bio</div></a></li>
                <li><a href='#skills'><div className='nav-highlighter'>Skills</div></a></li>
                <li><a href='#experience'><div className='nav-highlighter'>Experience</div></a></li>
                <li><a href='#projects'><div className='nav-highlighter'>Projects</div></a></li>
                <li><a href='#contact'><div className='nav-highlighter'>Contact</div></a></li>
            </ul>
        </div>
    )
}

export default Navbar;