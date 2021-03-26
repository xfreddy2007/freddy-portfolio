import React from 'react';

import classes from './Footer.module.css';
import IconItems from '../../components/IconItems/IconItems';
import Copyright from '../../components/Copyright/Copyright';

const footer = props => {
    let attchedClasses = ["w-full h-auto justify-start flex flex-col pb-8 xl:px-32 lg:px-24 md:px-16 sm:px-8 font-sans text-gray-50", classes.footer].join(' ');

    return (
        <footer className={attchedClasses}>
            <h2 className="text-md mx-5 font-bold mt-8 mb-2 xl:text-3xl lg:text-2xl md:text-xl sm:text-lg">Let's Chat!</h2>
            <p className="text-sm mx-5 my-2 xl:text-lg md:text-md font-serif">Send me an email at <strong className="underline">xfreddy2007@gmail.com</strong></p>
            <p className="text-sm mx-5 my-2 xl:text-lg md:text-md font-serif">if you are interested in me!</p>
            <div className="mx-5">
                <IconItems />
            </div>
            <div className="flex text-xs mt-8 justify-center"><Copyright /></div>
        </footer>
    );
};

export default footer;