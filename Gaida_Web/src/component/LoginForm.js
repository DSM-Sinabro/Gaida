import React from 'react';
import SocialLoginForm from './SocialLoginForm';
import NormalLoginForm from './NormalLoginForm';
import LoginButt from './LoginButt';
import LoginSub from './LoginSub';
import styles from './LoginForm.scss';

class LoginForm extends React.Component {
    render() {
        return(
            <div className = {styles.login_form}>
                <SocialLoginForm />
                <NormalLoginForm />
                <LoginButt />
                <LoginSub />
            </div>
        )
    }
}

export default LoginForm;