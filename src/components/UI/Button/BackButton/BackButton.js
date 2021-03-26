import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import classes from './BackButton.module.css';

const backButton = props => {
    let attchedClasses = ["text-md my-3 w-28 sm:w-32 md:w-36 lg:w-40 text-gray-50 xl:text-xl md:text-lg cursor-pointer border-indigo-800 border-solid border-2 rounded-xl", classes.backbutton].join(' ');

    return (
        <button className={attchedClasses} onClick={props.goBack}><FontAwesomeIcon icon={faArrowLeft} className={classes.move}/>Back</button>
    );
};

export default backButton;