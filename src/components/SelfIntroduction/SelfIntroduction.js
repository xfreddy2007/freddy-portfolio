import React from 'react';

import Button from '../UI/Button/Button';

const selfIntroduction = props => (
    <div className="w-full justify-start flex flex-col mt-4 px-4 xl:px-32 lg:px-24 md:px-16 sm:px-8 font-serif text-indigo-800">
        <p className="text-sm my-3 xl:text-lg md:text-md">I was a professional civil engineer previously and deeply dive into web development and data science.</p>
        <p className="text-sm my-3 xl:text-lg md:text-md">The first time I encounter data science and web developement was in my master student career in University of Michigan. I was fascinated by the power of those data driven models and how they interact with people through Websites in the world. As I know that this would be the future interaction between humans, I set a goal for myself to join this changeable and unlimited thinking field.</p>
        <p className="text-sm my-3 xl:text-lg md:text-md">I came back to Taiwan and find resources for me to improve my skills in the field. It turns out that I have done serveral courses and keep going on with it. Stacking my techniques and also my projects in order to show everyone I am capable of joining this whole new environment.</p>
        <p className="text-sm my-3 xl:text-lg md:text-md">Active, responsible, and team working are characteristics that describles me. Full of diversities and willing to try new things are living codes to my lifestyle as well. Other than working, I love volleyballs, badminton, musics, playing in a band, traveling and cooking. All of them build me up and make me not afraid of difficulties, but to overcome with creative and intuitive opinions.</p>
        <p className="text-sm my-3 xl:text-lg md:text-md">If you've been this far, please leave me a message. I'd love to hear your voice.</p>
        <h2 className="text-sm my-3 xl:text-lg md:text-md">Get in Touch!</h2>
        <Button link="https://www.cakeresume.com/freddy-liu">RESUME</Button>
    </div>
    
);

export default selfIntroduction;