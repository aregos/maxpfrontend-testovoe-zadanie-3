import {SIGNIN_REQUEST,SIGNIN_SUCCESS,SIGNIN_FAILURE,SIGNOUT_REQUEST,SIGNOUT_SUCCESS,SIGNOUT_FAILURE} from "../actions/google";

const initialState = {
    name : null,
    id_token : null,
    image : null,
    error : null,
    isFetching : false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case SIGNIN_SUCCESS:
            return {
                ...state,
                name : action.payload.name,
                id_token : action.payload.id_token,
                image : action.payload.image,
                isFetching : false,
            };
        case SIGNIN_FAILURE:
            return {
                ...state,
                error : action.payload,
                isFetching : false,
            };
        case SIGNOUT_REQUEST:
            return {
                ...state,
                isFetching : true,
            };
        case SIGNOUT_SUCCESS:
            return {
                ...state,
                name : action.payload,
                id_token : action.payload,
                image : action.payload,
                isFetching : false,
            };
        case SIGNOUT_FAILURE:
            return {
                ...state,
                error : action.payload,
                isFetching : false,
            };
        default:
            return state
    }
}