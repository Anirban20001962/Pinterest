import axiosInstance from "../../axiosInstance";
import {spinnerFalse,spinnerTrue} from './spinnerReducers'
export const POSTS_RECEIVED = 'POSTS_RECEIVED'
export const POSTS_NOTRECEIVED = 'POSTS_NOTRECEIVED'
export const postReceived = (posts) => ({type: POSTS_RECEIVED,posts: posts})
export const postNotreceived = () => ({type: POSTS_NOTRECEIVED})

export const postsAsk = () => {
    console.log("Running");
    return (dispatch) => {
        dispatch(spinnerTrue());
        const token = localStorage.getItem('token');
        axiosInstance.get('/feed/posts', {headers: {Authorization: token}})
        .then(response => {
            dispatch(spinnerFalse());
            dispatch(postReceived(response.data));
        })
        .catch(error => {
            console.log(error)
            dispatch(spinnerFalse());
        })
    };
}