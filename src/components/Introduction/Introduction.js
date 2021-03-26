import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

import Button from '../UI/Button/Button';

const Introduction = props => {
    useEffect(() => {
        AOS.init({
            delay: 200, // values from 0 to 3000, with step 50ms
            duration: 1500, // values from 0 to 3000, with step 50ms
            anchorPlacement: 'bottom-top',
            mirror: true, // whether elements should animate out while scrolling past them
        });
    }, []);

    return (
        <div className="mt-32 w-full mb-8">
            <h1 className="text-3xl mx-5 font-bold my-4 xl:text-8xl lg:text-7xl md:text-5xl sm:text-4xl" data-aos="fade-down">Hey,</h1>
            <h1 className="text-3xl mx-5 font-bold my-4 xl:text-8xl lg:text-7xl md:text-5xl sm:text-4xl" data-aos="fade-down">I'm Freddy Liu.</h1>
            <h2 className="text-lg mx-5 font-bold my-4 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl" data-aos="fade-down">I create things to entertain people.</h2>
            <div className="xl:w-3/5 md:w-3/4 sm:w-full font-serif">
                <p className="text-sm mx-5 text-justify my-4 xl:text-lg md:text-md">Fully passionate in Web Development. Problem solving, critical thinking, providing intuitive, responsive and creative designs for users.</p>
            </div>
            <div className="xl:w-3/5 md:w-3/4 sm:w-full font-serif">
                <p className="text-sm mx-5 text-justify my-4 xl:text-lg md:text-md">Currently looking for a position of <strong className="underline">Front-End Developer.</strong></p>
            </div>
            <Button link="https://www.cakeresume.com/freddy-liu">RESUME</Button>
        </div>
    );
};

export default Introduction;