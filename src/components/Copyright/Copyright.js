import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const copyright = props => (
    <div>
        <p className="inline-block mr-2">© 2021 - Developed with </p>
        <p style={{color: 'red', fontSize: '1.25rem', display: 'inline-block', marginRight: '0.5rem'}}><FontAwesomeIcon icon={faHeart}/></p>
        <p className="inline-block mr-2"> by </p>
        <a className="inline-block mr-2" href="https://github.com/xfreddy2007" target="_blank" rel="noopener noreferrer">Freddy</a>
    </div>
    
);

export default copyright;