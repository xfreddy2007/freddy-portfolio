import React from 'react';

const card = props => (
    <div className="w-full p-1 xl:p-5 lg:p-4 md:p-3 sm:p-2 shadow-md hover:shadow-lg rounded-lg xl:my-4 my-3 bg-gray-100">
        <h2 className="text-md my-3 xl:text-xl md:text-lg">{props.title}</h2>
        <p className="text-sm my-3 xl:text-lg md:text-md text-gray-400 font-serif italic">{props.ins}</p>
        { props.link ? <strong className=" text-sm my-3 xl:text-lg md:text-md font-serif underline"><a target="_blank" rel="noopener noreferrer" href={props.link}>View Cetificate</a></strong> : null}
    </div>
);

export default card;