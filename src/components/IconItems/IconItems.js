import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare';

import Aux from '../../hoc/Aux/Aux';
// import IconItem from './IconItem/IconItem';

const iconItems = props => (
    <Aux>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/xfreddy2007" className="text-sm xl:text-lg md:text-md mr-1 lg:mr-4 md:mr-3 sm:mr-2" title="Facebook Profile">
            <FontAwesomeIcon icon={faFacebookSquare}/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hsuan-fu-liu-515525156/" className="text-sm xl:text-lg md:text-md mr-1 lg:mr-4 md:mr-3 sm:mr-2" title="Linkedin Profile">
            <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/xfreddy2007" className="text-sm xl:text-lg md:text-md mr-1 lg:mr-4 md:mr-3 sm:mr-2" title="Github Page">
            <FontAwesomeIcon icon={faGithubSquare}/>
        </a>
    </Aux>
);

export default iconItems;