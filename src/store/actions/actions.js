import * as actionTypes from './actionTypes';

export const setWorksActive = () => {
    return {
        type: actionTypes.SET_WORKS_ACTIVE
    }
};

export const setWorksClosed = () => {
    return {
        type: actionTypes.SET_WORKS_CLOSED
    }
};