import React from 'react';

import classes from './ExpandImage.module.css';

const expandImage = props => {
    let attachedClasses = ['m-8 rounded-2xl cursor-pointer shadow-lg', classes.image].join(' ');

    return (
        <div className={attachedClasses}>
            <img src={props.image} alt={props.alt} className="h-full w-full rounded-2xl object-cover"/>
        </div>
    );
};

export default expandImage;