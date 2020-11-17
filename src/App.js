import React, {useEffect} from 'react';
import Home from './Component/Home/Home'
import Navigation from'./Component/Navigation/Navigation.js'
import Footer from './Component/Footer/Footer'
import {connect} from 'react-redux';
import Auth from './Container/Auth/Auth'
import { authAction,logout } from './Redux/reducers/authReducer'
const App = (props) => {
  const {authenticate,deauthenticate} = props;
  useEffect(() => {
    const expiryDate = localStorage.getItem('expiryDate');
    if(expiryDate) {
      console.log(new Date().getTime())
      console.log(expiryDate- new Date().getTime())
      if(new Date().getTime() <= expiryDate) {
        authenticate();
      }
      else {
        deauthenticate();
      }
    }
  },[authenticate,deauthenticate])
  return (
    <React.Fragment >
        <Navigation/>
        <Home />
        <Footer />
        {!props.auth? <Auth /> : null }
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({auth: state.isLogin})
const mapDispatchToProps = dispatch => {
  return {
    authenticate: () => dispatch(authAction()),
    deauthenticate: () => dispatch(logout())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
