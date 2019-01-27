import {getNews} from '../helpers/newsHelper'

export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE';


export function fetchNews() {
    return async dispatch => {
        dispatch({
            type : GET_NEWS_REQUEST,
        })
        await getNews().then(res => {
            if (res) {
                dispatch({
                    type : GET_NEWS_SUCCESS,
                    payload : res.feeds,
                })
            }
            else dispatch({
                type : GET_NEWS_FAILURE,
                payload : 'error',
            })
        })
    }
}