import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    let element;
    let sticky;
    let sections;
    let $navbarBurgers;

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
        $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        if ($navbarBurgers.length > 0) {
            $navbarBurgers.forEach(el => {
                el.addEventListener('click', () => {
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });
        }
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

    function hideBurger() {
        if ($navbarBurgers.length > 0) {
            $navbarBurgers.forEach(el => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        }
    }

    function manageNavs(element) {
        let navs = element.getElementsByClassName('navbar-item');
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
        <nav id='nav-container' className="navbar is-dark" role="navigation" aria-label="main navigation">
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbar-target">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>

            <div id="navbar-target" className="navbar-menu has-text-centered">
                <a onClick={() => hideBurger()} href="#home" className="navbar-item is-size-3">Home</a>
                <a onClick={() => hideBurger()} href="#bio" className="navbar-item is-size-3">Bio</a>
                <a onClick={() => hideBurger()} href='#skills' className="navbar-item is-size-3">Skills</a>
                <a onClick={() => hideBurger()} href='#experience' className="navbar-item is-size-3">Experience</a>
                <a onClick={() => hideBurger()} href='#projects' className="navbar-item is-size-3">Projects</a>
                <a onClick={() => hideBurger()} href='#contact' className="navbar-item is-size-3">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;