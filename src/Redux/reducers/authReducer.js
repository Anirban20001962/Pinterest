import axiosInstance from "../../axiosInstance";

export const AUTH_ACTION = 'AUTH_ACTION'
export const LOGOUT_ACTION = "LOGOUT_ACTION"

export const authAction = () => ({type: AUTH_ACTION})
export const logoutAction = () => ({type: LOGOUT_ACTION})

export const signup = (userData) => {
    return (dispatch) => {
        axiosInstance.post("/auth/signup",userData)
        .then(response => {
            console.log(response);
            dispatch(authAction());
        })
        .catch(error => {
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
        axiosInstance.post("/auth/login",userData)
        .then(response => {
            process(response.data);
            dispatch(authAction());
        })
        .catch(error => {
            alert(error);
        })
    };
}
export const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("expiryDate");
    return logoutAction();
}
