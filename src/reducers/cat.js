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
    } else if (action.type === 'FETCH_CAT_SUCCESS') {
        return Object.assign({}, state, {
            loading: false,
            data: action.cat
        });
    } else if (action.type === 'FETCH_CAT_ERROR') {
        return Object.assign({}, state, {
            loading: false,
            err: action.error
        });
    } else if (action.type === 'ADOPT_CAT_REQUEST') {
        return Object.assign({}, state, {
            data: null,
            loading: true
        });
    } else if (action.type === 'ADOPT_CAT_SUCCESS') {
        return Object.assign({}, state, {
            loading: false,
        });
    } else if (action.type === 'ADOPT_CAT_ERROR') {
        return Object.assign({}, state, {
            loading: false,
            err: action.error
        });
    } else {
        return state;
    }
}