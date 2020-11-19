import {SPINNER_TRUE,SPINNER_FALSE} from '../reducers/spinnerReducers'
import {POSTS_RECEIVED} from '../reducers/postsReducer'
const intialState = {
    posts: [],
    spinner: true
}

const manager = (state=intialState,action) => {
    switch (action.type) {
        case SPINNER_TRUE:
            return {
                ...state,
                spinner: true
            }
        case SPINNER_FALSE:
            return {
                ...state,
                spinner: false
            }
        case POSTS_RECEIVED:
            return {
                ...state,
                posts: [...action.posts.posts]
            }
        default:
            return state;
    }
}
export default manager;