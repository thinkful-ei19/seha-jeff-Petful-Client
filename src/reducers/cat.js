import * as actions from '../actions';

const initialState = {
    data: null,
    error: null,
    loading: null
};

export default function reducer(state = initialState, action) {
    if (action.type === 'FETCH_CAT_REQUEST') {
        return Object.assign({}, state, {
            loading: true
        });
    } if (action.type === 'FETCH_CAT_SUCCESS') {
        return Object.assign({}, state, {
            loading: false,
            data: action.cat
        });
    }  if (action.type === 'FETCH_CAT_ERROR') {
        return Object.assign({}, state, {
            loading: false,
            err: action.error
        });
    } if (action.type === 'ADOPT_CAT_REQUEST') {
        return Object.assign({}, state, {
            data: null,
            loading: true
        });
    }  if (action.type === 'ADOPT_CAT_SUCCESS') {
        return Object.assign({}, state, {
            loading: false,
        });
    }  if (action.type === 'ADOPT_CAT_ERROR') {
        return Object.assign({}, state, {
            loading: false,
            err: action.error
        });
    } 
    return state;
}