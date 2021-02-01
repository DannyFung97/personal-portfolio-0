import React, { useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    let element;
    let sticky;
    let sections;

    useEffect(() => {
        element = document.getElementById('nav-container');
        sticky = element.offsetTop;
        sections = [
            document.getElementById('home'),
            document.getElementById('bio'),
            document.getElementById('skills'),
            document.getElementById('experience'),
            document.getElementById('projects'),
            document.getElementById('contact'),
        ];
        manageNavs(element);
    }, [])

    document.addEventListener('scroll', function (e) {
        if (element != undefined) {
            if (window.pageYOffset >= sticky) {
                element.classList.add("sticky")
            } else {
                element.classList.remove("sticky");
            }
            manageNavs(element);
        }
    })

    function manageNavs(element) {
        let navs = element.getElementsByClassName('nav');
        for (let i = 0; i < sections.length; i++) {
            let elementTop = window.pageYOffset + sections[i].getBoundingClientRect().top;
            let elementBottom = elementTop + sections[i].offsetHeight;
            let windowMiddle = window.scrollY + (window.innerHeight / 2);
            if (windowMiddle > elementTop && windowMiddle < elementBottom) {
                navs[i].classList.add('located')
            }
            else {
                navs[i].classList.remove('located')
            }
        }
    }

    return (
        <nav id='nav-container' className='nav-container'>
            <ul>
                <li><a className='nav' href='#home'>Home</a></li>
                <li><a className='nav' href='#bio'>Bio</a></li>
                <li><a className='nav' href='#skills'>Skills</a></li>
                <li><a className='nav' href='#experience'>Experience</a></li>
                <li><a className='nav' href='#projects'>Projects</a></li>
                <li><a className='nav' href='#contact'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;