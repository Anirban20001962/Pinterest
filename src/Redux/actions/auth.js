import { AUTH_ACTION,LOGOUT_ACTION } from '../reducers/authReducer';
import {SPINNER_TRUE,SPINNER_FALSE} from '../reducers/spinnerReducers';

const intialState = {
    isLogin: false,
    spinner: false
}

export default function manager(state=intialState,action) {
    switch(action.type) {
        case AUTH_ACTION:
            return {
                ...state ,
                    isLogin: true
        }
        case LOGOUT_ACTION:
            return {
                ...state ,
                    isLogin: false
        }
        case SPINNER_TRUE:
            return {
                ...state ,
                    spinner: true
        }
        case SPINNER_FALSE:
            return {
                ...state ,
                    spinner: false
        }
        default:
            return state
    } 
} 