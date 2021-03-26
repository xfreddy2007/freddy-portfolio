import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

import ListItems from '../../../../../../components/UI/ListItems/ListItems';

const insideIntro = props => {
    const featureList = [
        'Full Stack Development',
        'React Framework used for Front-End',
        'Node.js + Express.js used for Back-End',
        'PostgreSQL used for Database',
        'Built with tachyons and Custom CSS',
        'Light Clean Codes',
        'Fully Responsive',
        'Valid HTML5 & CSS3']

    return (
        <div>
            <h2 className="text-sm mt-3 text-center xl:text-lg md:text-md font-bold font-serif mb-3 xl:mb-5 lg:mb-9 md:mb-7 sm:mb-5">"An App which you can detect your face within an image."</h2>
            <h2 className="text-sm mt-3 xl:text-lg md:text-md font-bold underline font-sans">Features</h2>
                <ul className="mb-3 xl:mb-5 lg:mb-9 md:mb-7 sm:mb-5">
                    <ListItems value={featureList}/>
                </ul>
            <h2 className="text-sm mt-3 xl:text-lg md:text-md font-bold underline font-sans">Get Started<FontAwesomeIcon icon={faRocket}/></h2>
            <p className="text-sm mt-3 xl:text-lg md:text-md font-serif mb-3 xl:mb-5 lg:mb-9 md:mb-7 sm:mb-5">First acces in the website, there is a sign in form and a register form. We collect user information and store them in the database. After login the website, a block requires an image url for face detection. you can paste an image ends with .jpg, and it will show a box which indicates the location of the face in the image. It also counts the image detect times that a user has done, and store in the database.</p>
            <h2 className="text-sm mt-3 xl:text-lg md:text-md font-bold underline font-sans">API Selection</h2>
            <p className="text-sm mt-3 xl:text-lg md:text-md font-serif mb-3 xl:mb-5 lg:mb-9 md:mb-7 sm:mb-5">I choose to use Clarifai face recognition API (<a href="https://www.clarifai.com/models/face-detection" className="underline">https://www.clarifai.com/models/face-detection</a>), it is easy to use and understand. The request of this api is an image url, and the response is called "bounding_box" values, which are the coordinates of the box outlining each face within the image. For the blue box shown in the image detection result is a CSS pixel calculation.</p>
            <h2 className="text-sm mt-3 xl:text-lg md:text-md font-bold underline font-sans">Why React</h2>
            <p className="text-sm mt-3 xl:text-lg md:text-md font-serif mb-3 xl:mb-5 lg:mb-9 md:mb-7 sm:mb-5">React is a Front-End Frameworrk, and it has many advantages such as modulized components, easy maintenance, etc. Most important, it is easy to pick up and is popular throughout recent front-end environment (Vue.js is like an elevator with nowadays). For the above reasons, I choose to use React for this practice project.</p>
            <h2 className="text-sm mt-3 xl:text-lg md:text-md font-bold underline font-sans">Why PostgreSQL</h2>
            <p className="text-sm mt-3 xl:text-lg md:text-md font-serif mb-3 xl:mb-5 lg:mb-9 md:mb-7 sm:mb-5">There are plenty of database selections. I need a structured database so NoSQL, MongoDB won't be good choices. I choose to use PostgreSQL is that I have used before and it is not hard to implement.</p>
            <h2 className="text-sm mt-3 xl:text-lg md:text-md font-bold underline font-sans">Why Node.js & Express.js</h2>
            <p className="text-sm mt-3 xl:text-lg md:text-md font-serif mb-3 xl:mb-5 lg:mb-9 md:mb-7 sm:mb-5">I am not familiar with backend environment so I choose a language that is similar to what I've learn now, and it comes Node.js and Express.js. Although some other languages such as PHP, Ruby on Rails, or Go. They all have their advantages. Further research is required for later projects.</p>
            <h2 className="text-sm mt-3 xl:text-lg md:text-md font-bold underline font-sans">Main Challenge</h2>
            <p className="text-sm mt-3 xl:text-lg md:text-md font-serif mb-3 xl:mb-5 lg:mb-9 md:mb-7 sm:mb-5">This is my first React App project. An end-to-end practice for ajax syntax, redux use, and user interface creation. Most important in this project, a sign-in and register page is used in it. For the user information, some important issue should be considered:</p>
            <ul className="font-serif grid grid-cols-1">
                <li className="text-sm my-3 xl:text-lg md:text-md">- User ID and password is securely pass from Front-End to Back-End.</li>
                <li className="text-sm my-3 xl:text-lg md:text-md">- The third party API key should hide from public</li>
            </ul>
            <p className="text-sm mt-3 xl:text-lg md:text-md font-serif mb-3 xl:mb-5 lg:mb-9 md:mb-7 sm:mb-5">We use <strong className="font-code bg-gray-200">bcrypt-nodejs</strong> to encrypt password and pass to Back-End and database. Then take the API request in Back-End to avoid display API key in Front-End.</p>
            <h2 className="text-sm mt-3 xl:text-lg md:text-md font-bold underline font-sans">Where to go from here</h2>
            <p className="text-sm mt-3 xl:text-lg md:text-md font-serif mb-3 xl:mb-5 lg:mb-9 md:mb-7 sm:mb-5">Actually this is just a simple use of React framework to demo simple functions like connecting third party API and store user ID and password in database. Lots of expansions can be implemented in this projects like <strong className="font-code bg-gray-200">React Hooks</strong>. Other React skills can go from here to get deeper understanding in order to utilize in future projects.</p>
        </div>
    );
};

export default insideIntro;