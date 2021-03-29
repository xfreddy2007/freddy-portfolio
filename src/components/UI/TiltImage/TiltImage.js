import React from 'react';
import LazyLoad from 'react-lazyload';

import Tilt from 'react-parallax-tilt';

const TiltImgae = props => (
    <LazyLoad>
        <Tilt>
            <img src={props.image} alt={props.alt} className={props.classList.join(' ')}/>
        </Tilt>
    </LazyLoad>
);

export default TiltImgae;