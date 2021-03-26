import React from 'react';

import classes from './AboutTitle.module.css';

const aboutTitle = props => {
    let attachedClasses = ["flex text-gray-50 w-full h-sm xl:h-xl lg:h-lg md:h-md sm:h-sm", classes.background].join(' ');

    return (
        <div className={attachedClasses}>
            <div className="w-2/5 sm:w-1/2"></div>
            <div className="flex flex-col justify-center mt-32 w-3/5 sm:w-1/2 pr-4 xl:pr-32 lg:pr-24 md:pr-16 sm:pr-8 font-sans">
                <h1 className="text-lg mt-2 font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl">Hey,</h1>
                <h1 className="text-lg mt-2 font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl">I'm Freddy Liu</h1>
                <h2 className="text-sm my-4 xl:text-lg md:text-md">Love to find and solve problems. Having innovative, critical, and comprehensive thinking. Eager to pick up new stuffs.</h2>
            </div>
        </div>
    );
};

export default aboutTitle;