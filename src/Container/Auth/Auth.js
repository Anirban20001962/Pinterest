import React, {useState} from 'react'
import Styles from './Auth.module.css'
import { signup,login } from '../../Redux/reducers/authReducer'
import { connect } from 'react-redux'
import Spinner from '../../Component/Spinner/Spinner'
import {ReactComponent as Logo} from '../../Component/Navigation/pinterest.svg'
const Auth = (props)=> {
    let objectStyle = {
        "display": 'flex',
        "alignItems": 'center',
        "justifyContent": 'center'
    }
    let [name,changeName] = useState("");
    let [password,changePassword] = useState("");
    let [email,changeEmail] = useState("");
    let element = null;
    if(props.spinner) {
        element = <Spinner />
    }
    else {
        element = (<React.Fragment>
            <div className={Styles.Heading}>
                <h1>Sign up to get your ideas</h1>
            </div>
            <div className={Styles.form}>
                <div className={Styles.form_layout}>
                    <div className={Styles.logo_modify}>
                        <Logo/>
                    </div>
                    <div className={Styles.Heading1}>
                        <h1>Welcome to Pinterest</h1>
                    </div>
                    <p>Find new ideas to try</p>
                    <input 
                    type="text" 
                    className={Styles.input_tag} 
                    placeholder="Name"
                    value={name} 
                    onChange={(e) => changeName(e.target.value)}
                    />
                    <input 
                    type="text" 
                    className={Styles.input_tag} 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => changeEmail(e.target.value)}
                     />   
                    <input type="password" 
                    className={Styles.input_tag} 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => changePassword(e.target.value)}
                    />
                    <div className={Styles.red_collect}>
                        <button className={Styles.red} onClick={() => props.Login({email,password})}>Log in</button>
                        <button className={Styles.red} onClick={() => props.Signup({name,email,password})}>Sign up</button>
                    </div>
                </div>
            </div>
        </React.Fragment>)
    }
    return (
        <div className={Styles.Auth_container} style={props.spinner?objectStyle:null}>
            {element}
        </div>
    )
}
const mapStateToProps = (store) => ({spinner: store.auth.spinner})
const mapDispatchToProps = dispatch => {
    return {
        Signup: (userData) => dispatch(signup(userData)),
        Login: (userData) => dispatch(login(userData))
    }
} 
export default connect(mapStateToProps,mapDispatchToProps) (Auth)