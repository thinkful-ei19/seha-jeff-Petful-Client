const initialState = {
    data: null,
    error: null,
    loading: null
};

export default function reducer(state = initialState, action) {
    if (action.type === 'FETCH_DOG_REQUEST') {
        return Object.assign({}, state, { loading: true });
    } else if (action.type === 'FETCH_DOG_SUCCESS') {
        return Object.assign({}, state, { loading: false, data: action.dog });
    } else if (action.type === 'FETCH_DOG_ERROR') {
        return Object.assign({}, state, { loading: false, err: action.error });
    } else if (action.type === 'ADOPT_DOG_REQUEST') {
        return Object.assign({}, state, { data: null, loading: true });
    } else if (action.type === 'ADOPT_DOG_SUCCESS') {
        return Object.assign({}, state, { loading: false });
    } else if (action.type === 'ADOPT_DOG_ERROR') {
        return Object.assign({}, state, { loading: false, err: action.error });
    } else {
        return state;
    }
}