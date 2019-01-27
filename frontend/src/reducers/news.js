import {GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE} from "../actions/news";
import {GET_FEED_REQUEST, GET_FEED_SUCCESS, GET_FEED_FAILURE} from "../actions/getFeed";

const initialState = {
    news : [],
    currentFeed : {},
    error : '',
    isFetching : false,
}

export const news = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS_REQUEST:
            return {
                ...state,
                isFetching : true,
            }
        case GET_NEWS_SUCCESS:
            return {
                ...state,
                news : action.payload,
                isFetching : false,
            }
        case GET_NEWS_FAILURE:
            return {
                ...state,
                error : action.payload,
                isFetching : false,
            }
        default:
            return state;
    }
}

export const getFeed = (state = initialState, action) => {
    switch (action.type) {
        case GET_FEED_REQUEST:
            return {
                ...state,
                isFetching : true,
            };
        case GET_FEED_SUCCESS:
            return {
                ...state,
                currentFeed: action.payload,
                isFetching: false,
            };
        case GET_FEED_FAILURE:
            return {
                ...state,
                error : action.payload,
                isFetching : false,
            };
        default:
            return state;
    }
};