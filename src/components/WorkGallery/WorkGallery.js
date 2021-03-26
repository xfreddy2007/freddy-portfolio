import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import TiltImgae from '../UI/TiltImage/TiltImage';

import BurgerBuilder from '../../assets/images/burger-builder.png';
import SmartBrain from '../../assets/images/smart-brain.png';

const workGallery = props => (
    <Aux>
        <h1 className="text-lg mx-5 mt-16 font-sans font-bold xl:text-8xl lg:text-6xl md:text-4xl sm:text-2xl tracking-wider">Work Gallery</h1>
        <div className="w-full flex items-center justify-center">
            <div className="h-4/5 w-4/5 m-6 rounded-2xl">
                <TiltImgae image={BurgerBuilder} classList={['h-full', 'w-full', 'rounded-2xl', 'object-cover']} alt="BurgerBuilder"/>
            </div>
            <p className="text-sm mx-5 my-4 xl:text-lg md:text-md">Burger Builder</p>
        </div>
        <div className="w-full flex items-center justify-center">
            <p className="text-sm mx-5 my-4 xl:text-lg md:text-md">Smart Brain Detector</p>
            <div className="h-4/5 w-4/5 m-6 rounded-2xl">
                <TiltImgae image={SmartBrain} classList={['h-full', 'w-full', 'rounded-2xl', 'object-cover']} alt="SmartBrain"/>
            </div>
        </div>
    </Aux>
);

export default workGallery;