import React, { useEffect } from 'react';
import { checkAnim } from './animationTrigger';
import './Contact.css'

const Contact = () => {

    document.addEventListener('scroll', function (e) {
        checkAnim('contact', 'fadeIn');
        checkAnim('options', 'fadeIn');
        let contact = document.getElementById('contact');
        let scrollPos = window.scrollY;
        let elementPos = window.pageYOffset + contact.getBoundingClientRect().top + (contact.offsetHeight / 4);
        if (scrollPos + window.innerHeight > elementPos) {
            slideFromLeft(document.getElementById('question'))
            slideFromRight(document.getElementById('suggestion'))
        }
    })

    function slideFromRight(el) {
        if (!el.classList.contains('anim-done')) {
            el.classList.add('anim-done')
            el.animate([
                { opacity: 0, transform: 'translateX(50%)' },
                { opacity: 1, transform: 'translateX(0%)' }
            ],
                {
                    duration: 500,
                    delay: 300,
                    easing: 'ease',
                    fill: 'forwards'
                })
        }
    }

    function slideFromLeft(el) {
        if (!el.classList.contains('anim-done')) {
            el.classList.add('anim-done')
            el.animate([
                { opacity: 0, transform: 'translateX(-50%)' },
                { opacity: 1, transform: 'translateX(0%)' }
            ],
                {
                    duration: 600,
                    delay: 300,
                    easing: 'ease',
                    fill: 'forwards'
                })
        }
    }

    return (
        <div className='section'>
            <div className='container'>
                <div className='columns is-centered'>
                    <div className='column has-text-centered is-12 contact py-6'>
                        <div className='columns is-centered'>
                            <div className='column has-text-centered is-9'>
                                <div id='contact' className='pt-6' style={{ opacity: 0 }}>
                                    <h1 className='has-text-custom is-size-2 pt-6'>Contact</h1>
                                </div>
                                <h1 style={{ opacity: 0 }} id='question' className='has-text-custom is-size-1 mb-6'>Looking to work together?</h1>
                                <h1 style={{ opacity: 0 }} id='suggestion' className='colorful is-size-2 py-5'>Let's get connected.</h1>
                                <div style={{ opacity: 0 }} id='options' className='container is-narrow'>
                                    <p className="column has-text-centered">
                                        <a href="mailto:dannyfung97@gmail.com" className="button is-medium button-is-rounded contact-button">
                                            <span className="icon">
                                                <i className="fas fa-envelope fa-lg"></i>
                                            </span>
                                        </a>
                                        <a href="https://github.com/DannyFung97" className="button is-medium button-is-rounded contact-button">
                                            <span className="icon">
                                                <i className="fab fa-github fa-lg"></i>
                                            </span>
                                        </a>
                                        <a href="https://www.linkedin.com/in/danny-fung/" className="button is-medium button-is-rounded contact-button">
                                            <span className="icon">
                                                <i className="fab fa-linkedin fa-lg"></i>
                                            </span>
                                        </a>
                                    </p>
                                    <h2 className='has-text-white is-size-6'>Made by Danny Fung using React and Bulma <span className="icon"><i className="fas fa-copyright fa-sm"></i></span> 2021</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact;