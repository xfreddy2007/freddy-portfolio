import React from 'react';

const backdrop = (props) => (
    props.show ? <div className="w-full h-full fixed z-30 left-0 top-0 bg-gray-900 bg-opacity-50" onClick={props.clicked}></div> : null
);

export default backdrop;