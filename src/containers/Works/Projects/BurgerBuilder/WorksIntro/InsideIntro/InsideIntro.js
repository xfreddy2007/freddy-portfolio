import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

import ListItems from '../../../../../../components/UI/ListItems/ListItems';

const insideIntro = props => {
    const featureList = [
        'FrontEnd Project (mainly)',
        'React Framework used for Front-End',
        'Firebase used for Back-End & Database',
        'Implementing React Hooks, Redux, and other features',
        'CSS module implemented',
        'Light Clean Codes',
        'Fully Responsive',
        'Valid HTML5 & CSS3']

    return (
        <div>
            <h2 className="text-sm mt-3 text-center xl:text-lg md:text-md font-bold font-serif mb-3 xl:mb-5 lg:mb-9 md:mb-7 sm:mb-5">"An App which you can order your customized burgers and sent orders to the backend."</h2>
            <h2 className="text-sm mt-3 xl:text-lg md:text-md font-bold underline font-sans">Features</h2>
            <ul className="mb-3 xl:mb-5 lg:mb-9 md:mb-7 sm:mb-5">
                <ListItems value={featureList}/>
            </ul>
            <h2 className="text-sm mt-3 xl:text-lg md:text-md font-bold underline font-sans">Get Started<FontAwesomeIcon icon={faRocket}/></h2>
            <p className="text-sm mt-3 xl:text-lg md:text-md font-serif mb-3 xl:mb-5 lg:mb-9 md:mb-7 sm:mb-5">When you reach the frontpage you have to signin for further use. It can then redirect to the builder page and start to build you own burger. Orders will be stored in the Firebase Database. you can always revisit the orders in the order page to see the past orders.</p>
            <h2 className="text-sm mt-3 xl:text-lg md:text-md font-bold underline font-sans">Why React</h2>
            <p className="text-sm mt-3 xl:text-lg md:text-md font-serif mb-3 xl:mb-5 lg:mb-9 md:mb-7 sm:mb-5">This project is mainly my second React project, and it has only a purpose to improve the understanding of React framework. React is a widely use framework and has a huge Ecosystem, active community, and high performance. It helps developers to be easier to manage UI states across entire application, and focus on the business logics.</p>
            <h2 className="text-sm mt-3 xl:text-lg md:text-md font-bold underline font-sans">Redux review</h2>
            <p className="text-sm mt-3 xl:text-lg md:text-md font-serif mb-3 xl:mb-5 lg:mb-9 md:mb-7 sm:mb-5">This project utilize redux. Redux is a central state management for the entire app. It gives a place (store) to store the state and can be extract by all components in the app. It can avoid the use of property chain for nested child components from a parent component to pass state as props to them. Since redux can take care of actions and states in a central place, we don't have to manage states in seperate components, and can stick to use more stateless components.</p>
            <h2 className="text-sm mt-3 xl:text-lg md:text-md font-bold underline font-sans">React Hooks</h2>
            <p className="text-sm mt-3 xl:text-lg md:text-md font-serif mb-3 xl:mb-5 lg:mb-9 md:mb-7 sm:mb-5">This is a new feature React team just provide in 16.8. It's the main practice knowledge for this project. React Hooks simply uses functional components. In the past if we need to manage state or use lifecycle hooks, we have to use class-based components. For React hooks we can manage state by using <strong className="font-code bg-gray-200">useState()</strong> hook, and to do lfecycle hooks use <strong className="font-code bg-gray-200">useEffect()</strong> hook for some funcitons with side effects (e.g. http request). This allow use to have more clean codes, and easy to manage states within the components.</p>
            <h2 className="text-sm mt-3 xl:text-lg md:text-md font-bold underline font-sans">Main Challenge</h2>
            <p className="text-sm mt-3 xl:text-lg md:text-md font-serif mb-3 xl:mb-5 lg:mb-9 md:mb-7 sm:mb-5">This project is an common web app framework, including an authenticaiton set, a main frontpage, and a branch of other sub-pages. Every project should start with app usage requirement. Then a workflow of planning with a component tree for a whole picture of how this app should contain. Making components and code design may pick up fast, but to satisfy the requirements from customer, would be another important topic.</p>
            <h2 className="text-sm mt-3 xl:text-lg md:text-md font-bold underline font-sans">Where to go from here</h2>
            <p className="text-sm mt-3 xl:text-lg md:text-md font-serif mb-3 xl:mb-5 lg:mb-9 md:mb-7 sm:mb-5">This is a practice project for me. For really implementing in real business projects I still need more practice and understanding about React and the workflow about an app product. Hope this project catches your eyes.</p>
        </div>
    );
};

export default insideIntro;