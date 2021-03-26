import React from 'react';

import ExpandImage from '../../../../components/UI/ExpandImage/ExpandImage';
import BackButton from '../../../../components/UI/Button/BackButton/BackButton';
import WorksIntro from './WorksIntro/WorksIntro';
import InsideIntro from './WorksIntro/InsideIntro/InsideIntro';

const burgerBuilderPage = props => {
    return (
        <div className="w-full justify-start flex flex-col mt-12 md:mt-0 font-sans text-indigo-800">
            <BackButton goBack={props.goBack}/>
            <div className="w-full flex">
                <div className="w-1/5 sm:w-2/5 md:w-3/5"><ExpandImage image={props.image}/></div>
                <WorksIntro title="Burger Builder"/>
            </div>
            <InsideIntro />
            <BackButton goBack={props.goBack}/>
        </div>
    );
};

export default burgerBuilderPage;