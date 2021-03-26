import React from 'react';

import Tilt from 'react-parallax-tilt';

const TiltImgae = props => (
    <div>
        <Tilt>
            <img src={props.image} alt={props.alt} className={props.classList.join(' ')}/>
        </Tilt>
    </div>
);

export default TiltImgae;