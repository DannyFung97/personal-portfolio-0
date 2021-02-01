import React, { useEffect } from 'react';
import { checkAnim } from './animationTrigger';
import './Contact.css'

const Contact = () => {

    document.addEventListener('scroll', function (e) {
        checkAnim('contact', 'fadeIn');

    })

    return (
        <div className='container contact-container'>
            <div id='contact' className='section-content'>
                <h1>Contact</h1>
                <h2>Looking to work together? Let's get connected.</h2>
                <div className='contact-options'>
                    <a href="mailto:dannyfung97@gmail.com" class="fa fa-envelope"></a>
                    <a href="https://github.com/DannyFung97" class="fa fa-github"></a>
                    <a href="https://www.linkedin.com/in/danny-fung/" class="fa fa-linkedin"></a>
                </div>
            </div>
            <div className='footer'>
                Made by Danny Fung using React <span class='fa fa-copyright footer-size'></span> 2021
            </div>
        </div>
    )
}

export default Contact;