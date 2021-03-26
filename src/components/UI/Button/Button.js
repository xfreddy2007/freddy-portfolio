import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
    let attachedClasses = ["text-sm h-8 w-28 mx-5 xl:h-16 xl:w-44 md:h-12 md:w-36 xl:text-lg md:text-md self-stretch font-serif cursor-pointer", classes.ctaBtn ,classes.ctaBtnLight].join(' ');
    
    return (
        <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.link}
        className={attachedClasses}>{props.children}</a>
    );
};

export default button;