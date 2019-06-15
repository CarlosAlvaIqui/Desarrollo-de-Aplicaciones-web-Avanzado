import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utility';

const initialState = {
    token: null,
    emaill: null,
    userId: null,
    userName: null,
    error: null,
    loading: false
};

const authStart = (state, action) => {
    return updateObject(state, {error: null, loading: true});
};

const authSucces = (state, action) => {
    return updateObject(state, {
        token: action.token,
        email: action.emaill,
        userName: action.userName,
        userId: action.userId,
        error: null,
        loading: false
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, email: null, name: null });
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSucces(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        default:
            return state;
    }
};

export default reducer;