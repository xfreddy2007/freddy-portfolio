import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import * as actions from '../../store/actions/actions';
import ExpandImage from '../../components/UI/ExpandImage/ExpandImage';
import BurgerBuilderPage from './Projects/BurgerBuilder/BurgerBuilderPage';
import SmartBrainPage from './Projects/SmartBrain/SmartBrainPage';

import BurgerBuilder from '../../assets/images/burger-builder.png';
import SmartBrain from '../../assets/images/smart-brain.png';

const Works = props => {
    const [burgerBuilderPage, setBurgerBuilderPage] = useState(false);
    const [smartBrainPage, setSmartBrainPage] = useState(false);

    const switchToBurgerBuilder = () => {
        props.history.push('./works/burgerbuilder');
        props.onSetWorksClosed();
        setBurgerBuilderPage(true);
    };

    const switchToSmartBrain = () => {
        props.history.push('./works/smartbrain');
        props.onSetWorksClosed();
        setSmartBrainPage(true);
    };

    const goBackToWorks = () => {
        props.history.goBack();
        props.onSetWorksActive();
        setBurgerBuilderPage(false);
        setSmartBrainPage(false);
    };

    const burgerProject = (
        <BurgerBuilderPage 
            goBack={goBackToWorks}
            image={BurgerBuilder}/>
    );

    const brainProject = (
        <SmartBrainPage 
            goBack={goBackToWorks}
            image={SmartBrain}/>
    );

    return (
        <div className="w-full justify-start flex flex-col mt-12 md:mt-0 p-4 xl:p-32 lg:p-24 md:p-16 sm:p-8 font-sans text-indigo-800">
            <div className={(props.isWorksActive && !burgerBuilderPage && !smartBrainPage)  ? "inline" : "hidden"}>
                <h1 className="text-lg mx-5 font-bold xl:text-8xl lg:text-6xl md:text-4xl sm:text-2xl tracking-wider">Works</h1>
                <h3 class="text-sm my-3 xl:text-lg md:text-md text-center">Hammer the picture to join each journey!</h3>
                <div className="mt-8 w-full flex flex-col items-center md:flex-row">
                    <div onClick={switchToBurgerBuilder}><ExpandImage image={BurgerBuilder}/></div>
                    <div onClick={switchToSmartBrain}><ExpandImage image={SmartBrain}/></div>
                </div>
            </div>
            <Route path={props.match.path + '/burgerbuilder'} render={() => burgerProject}/>
            <Route path={props.match.path + '/smartbrain'} render={() => brainProject}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isWorksActive: state.isWorksActive
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetWorksActive: () => dispatch(actions.setWorksActive()),
        onSetWorksClosed: () => dispatch(actions.setWorksClosed())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Works);