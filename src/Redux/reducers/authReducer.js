import axiosInstance from "../../axiosInstance";
import { spinnerTrue,spinnerFalse } from '../reducers/spinnerReducers';
export const AUTH_ACTION = 'AUTH_ACTION'
export const LOGOUT_ACTION = "LOGOUT_ACTION"
export const authAction = () => ({type: AUTH_ACTION})
export const logoutAction = () => ({type: LOGOUT_ACTION})

export const signup = (userData) => {
    return (dispatch) => {
        dispatch(spinnerTrue());
        axiosInstance.post("/auth/signup",userData)
        .then(response => {
            dispatch(spinnerFalse());
            dispatch(authAction());
        })
        .catch(error => {
            dispatch(spinnerFalse());
            alert(error);
        })
    };
}
const process = (data) => {
    localStorage.setItem('userId',data.userId);
    localStorage.setItem('token',data.token);
    const remainingSec = 1000*60*60;
    const expiryDate = new Date().getTime()+remainingSec;
    localStorage.setItem('expiryDate',expiryDate);
}
export const login = (userData) => {
    return (dispatch) => {
        dispatch(spinnerTrue());
        axiosInstance.post("/auth/login",userData)
        .then(response => {
            process(response.data);
            dispatch(spinnerFalse());
            dispatch(authAction());
        })
        .catch(error => {
            dispatch(spinnerFalse());
            alert(error);
        })
    };
}
export const logout = () => {
    localStorage.clear();
    return logoutAction();
}
