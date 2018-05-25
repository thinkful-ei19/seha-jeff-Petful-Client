import { API_BASE_URL } from '../config';


export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
    type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
    type: FETCH_CAT_SUCCESS,
    cat
})
export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = err => ({
    type: FETCH_CAT_ERROR,
    err
});
export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => ({
   type: ADOPT_CAT_REQUEST
}); 

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = () => ({
    type: ADOPT_CAT_SUCCESS,
});

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = err => ({
    type: ADOPT_CAT_ERROR,
    err
});

export const fetchCat = () => dispatch => {
    dispatch(fetchCatRequest());
    return (
        fetch(`${API_BASE_URL}/cat`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                dispatch(fetchCatSuccess(data))
            })
            .catch(err => {
                dispatch(fetchCatError(err));
            })
    );
}

export const adoptCat = () => dispatch => {
    dispatch(adoptCatRequest());
    return fetch(`${API_BASE_URL}/cat`, { method: 'DELETE' })
        .then(() => dispatch(adoptCatSuccess()))
        .then(() => {
            dispatch(fetchCat());
        })
        .catch(err => dispatch(adoptCatError(err)));
}