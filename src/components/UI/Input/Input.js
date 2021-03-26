import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
                className="my-2 w-24 h-8 xl:w-56 lg:w-48 md:w-40 sm:w-32 rounded-md shadow-sm ring-2 ring-indigo-800 focus:outline-none focus:ring-red-500 block" 
                {...props.elementConfig} 
                value={props.value}
                name={props.name}
                onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className="my-2 w-48 h-100 xl:w-96 lg:w-84 md:w-72 sm:w-60 rounded-md shadow-sm ring-2 ring-indigo-800 focus:outline-none focus:ring-red-500 block" 
                {...props.elementConfig} 
                value={props.value}
                name={props.name}
                onChange={props.changed}/>;
            break;
        default:
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value}
                name={props.name}
                onChange={props.changed}/>;
    }

    return (
        <div>
            <label className="text-sm xl:text-lg md:text-md block">{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;