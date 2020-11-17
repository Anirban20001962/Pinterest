import React,{useState} from 'react';
import { logout } from '../../Redux/reducers/authReducer'
import {ReactComponent as Logo} from './pinterest.svg'
import Styles from './Navigation.module.css'
import {connect} from 'react-redux';
const Navigation = (props) => {
    const width = window.screen.width;
    const choice = ["none","flex"];
    let pred=null;
    if(width<=452) {
        pred = 0;
    }
    else {
        pred = 1;
    }
    const [style,changeStyle] = useState(pred)
    return (
        <div className={Styles.navigation}>
            <div className={Styles.logo}>
                <div className={Styles.logo_dim}>
                    <Logo/>
                </div>
                <h1>Pinterest</h1>
            </div>
            <div className={Styles.bar_lines} onClick={()=>changeStyle(1-style)}>
            </div>
            <ul className={Styles.tag} style={{display: choice[style]}}>
                <li className={Styles.text}><a href="/#">About</a></li>
                <li className={Styles.text}><a href="/#">Business</a></li>
                <li className={Styles.text}><a href="/#">Blog</a></li>
                <li><button className={Styles.btn_red} 
                    onClick={props.deauthenticate}
                    >Your Posts
                    </button>
                </li>
                <li><button className={Styles.btn_red} 
                    onClick={props.deauthenticate}
                    >Log out
                    </button>
                </li>
            </ul>
        </div>
    )
}
const mapStateToprops = dispatch => {
    return {
        deauthenticate: () => dispatch(logout())
    }
}
export default connect(null,mapStateToprops) (Navigation);