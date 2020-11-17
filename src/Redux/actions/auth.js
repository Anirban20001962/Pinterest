import { AUTH_ACTION,LOGOUT_ACTION } from '../reducers/authReducer';

const intialState = {
    isLogin: false
}

export default function manager(state=intialState,action) {
    switch(action.type) {
        case AUTH_ACTION:
            return {
                isLogin: true
        }
        case LOGOUT_ACTION:
            return {
                isLogin: false
            }
        default:
            return state
    } 
} 