import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const listItem = props => (
    <li className="text-sm mt-3 xl:text-lg md:text-md font-serif mb-0.5 xl:mb-2.5 lg:mb-2 md:mb-1.5 sm:mb-1"><FontAwesomeIcon icon={faCheck}/> {props.value}</li>
);

export default listItem;