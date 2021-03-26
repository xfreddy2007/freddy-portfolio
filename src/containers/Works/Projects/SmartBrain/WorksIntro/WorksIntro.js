import React from 'react';

import Button from '../../../../../components/UI/Button/Button';

const worksIntro = props => (
    <div className="flex flex-col w-4/5">
        <div class="flex flex-col">
            <h1 class="text-md my-3 xl:text-xl md:text-lg mr-1 xl:mr-8 lg:mr-6 md:mr-4 sm:mr-2">{props.title}</h1>
            <div className="flex">
                <Button link="https://smart-brain-freddy.herokuapp.com/">VIEW</Button>
                <Button link="https://github.com/xfreddy2007/Smart-brain">Source Code</Button>
            </div>
        </div>
        <div>
            <h2 className="text-sm my-3 xl:text-lg md:text-md font-serif">Tools:</h2>
            <ul className="font-serif grid grid-cols-1">
                <li className="text-sm my-3 xl:text-lg md:text-md">- Front-End: <strong className="bg-gray-200">React</strong></li>
                <li className="text-sm my-3 xl:text-lg md:text-md">- Back-End: <strong className="bg-gray-200">Node.js + Express.js</strong></li>
                <li className="text-sm my-3 xl:text-lg md:text-md">- Database: <strong className="bg-gray-200">PostgreSQL</strong></li>
            </ul>
        </div>
    </div>
);

export default worksIntro;