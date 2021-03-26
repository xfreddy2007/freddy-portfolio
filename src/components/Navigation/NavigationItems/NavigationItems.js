import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actions';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
    <ul className="flex flex-col lg:flex-row list-none box-border font-sans text-gray-50" onClick={props.scroll}>
        <div onClick={props.onSetWorksActive}><NavigationItem link="/works" exact>Works</NavigationItem></div>
        <NavigationItem link="/about" exact>About</NavigationItem>
        <NavigationItem link="/contact" exact>Contact</NavigationItem>
    </ul>
);

const mapStateToProps = state => {
    return {
        isWorksActive: state.isWorksActive
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetWorksActive: () => dispatch(actions.setWorksActive())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(navigationItems);