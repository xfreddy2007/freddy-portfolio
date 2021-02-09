import 'jquery';
import 'vanilla-tilt';
import Headroom from "headroom.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'paroller.js';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_X9kgtqlsTa8Bzfr5s9Kpa");

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

// parallax
$(".parallax, [data-paroller-factor]").paroller({  
    factor: -0.3,        // +/-, if no other breakpoint factor is set this value is selected  
    factorXs: -0.2,      // factorXs, factorSm, factorMd, factorLg, factorXl      
    factorSm: -0.1,      // factorXs, factorSm, factorMd, factorLg, factorXl      
}); 
