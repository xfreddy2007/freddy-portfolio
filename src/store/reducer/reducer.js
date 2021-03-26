import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    isWorksActive: true
};

const setWorksActive = (state, aciton) => {
    return updateObject(state, {isWorksActive: true})
};

const setWorksClosed = (state, aciton) => {
    return updateObject(state, {isWorksActive: false})
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_WORKS_ACTIVE: return setWorksActive(state, action);
        case actionTypes.SET_WORKS_CLOSED: return setWorksClosed(state, action);
        default: return state;
    }
};

export default reducer;