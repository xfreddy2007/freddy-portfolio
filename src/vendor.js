import 'jquery';
import 'vanilla-tilt';
import Headroom from "headroom.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'paroller.js';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_X9kgtqlsTa8Bzfr5s9Kpa");

// Font Awesome library
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare';

library.add(fab, faFacebookSquare, faLinkedin, faGithubSquare);

function showFontAwesome(iconName, parentId, style, title, prefix) {
    const iconText = icon({ prefix: prefix, iconName: iconName});
    const container = document.getElementById(parentId);
    style.forEach(element => container.classList.add(element));
    container.title = title;
    Array.from(iconText.node).map(n => container.appendChild(n));
}

showFontAwesome('facebook-square', 'facebook-container', ['text-sm', 'xl:text-lg', 'md:text-md', 'mr-1', 'lg:mr-4', 'md:mr-3', 'sm:mr-2'], 'Facebook Profile', 'fab');
showFontAwesome('linkedin', 'linkedin-container', ['text-sm', 'xl:text-lg', 'md:text-md', 'mr-1', 'lg:mr-4', 'md:mr-3', 'sm:mr-2'], 'Linkedin Profile', 'fab');
showFontAwesome('github-square', 'github-container', ['text-sm', 'xl:text-lg', 'md:text-md', 'mr-1', 'lg:mr-4', 'md:mr-3', 'sm:mr-2'], 'Github Page', 'fab');

// Headroom.js initialization
const header = document.querySelector('header');
const headroom = new Headroom(header, {
    "offset": 50,
    "tolerance": 5,
    "classes": {
      "initial": "animated",
      "pinned" : "headroom--pinned",
      "unpinned" : "headroom--unpinned",
    }
});
headroom.init();



// AOS initialization
AOS.init({
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    anchorPlacement: 'bottom-top',
    mirror: true, // whether elements should animate out while scrolling past them
});

// tilt properties
VanillaTilt.init(document.querySelector('.tilt'),{
    max: 20,
});

// emailjs initialization
const form = document.getElementById('contact-form');
const message = document.getElementById('response');

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_v72nvfp', 'template_fm53pm1', e.target, 'user_X9kgtqlsTa8Bzfr5s9Kpa')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            message.textContent = 'Success!!';
            message.classList.remove('hidden');
            message.classList.add('text-green-500', 'border-green-500');
            setTimeout(() => {
                message.classList.remove('text-green-500', 'border-green-500');
                message.classList.add('hidden');
            }, 2500);
        }, (error) => {
            console.log('FAILED...', error);
            message.textContent = 'Failed! Please resend message!';
            message.classList.remove('hidden');
            message.classList.add('text-red-500', 'border-red-500');
            setTimeout(() => {
                message.classList.remove('text-red-500', 'border-red-500');
                message.classList.add('hidden');
            }, 2500);
        });
}

  form.addEventListener('submit', sendEmail);

// paroller initialization
$(".parallax, [data-paroller-factor]").paroller({  
    factor: -0.3,        // +/-, if no other breakpoint factor is set this value is selected  
    factorXs: -0.2,      // factorXs, factorSm, factorMd, factorLg, factorXl      
    factorSm: -0.1,      // factorXs, factorSm, factorMd, factorLg, factorXl      
}); 
