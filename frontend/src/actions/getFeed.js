import {getFeed} from '../helpers/newsHelper'

export const GET_FEED_REQUEST = 'GET_FEED_REQUEST';
export const GET_FEED_SUCCESS = 'GET_FEED_SUCCESS';
export const GET_FEED_FAILURE = 'GET_FEED_FAILURE';

export function watchFeed(id){
    return async dispatch => {
        dispatch({
            type : GET_FEED_REQUEST,
        });
        await getFeed(id).then(res => {
            if (res){
                console.log(res);
                dispatch({
                    type : GET_FEED_SUCCESS,
                    payload : res.feed,
                })
            }
            else {
                console.log(res);
                dispatch({
                    type : GET_FEED_FAILURE,
                    payload : res,
                })
            }
        })
    }
}